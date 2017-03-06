const path = require('path')
const get = require('lodash/get')
const callsite = require('callsite')
const resolve = require('resolve')
const fs = require('fs')
const glob = require('glob')

function nameFunctionIsCall (lvl) {
  const site = callsite()[lvl]

  return site.getFunctionName() === null
    ? process.cwd()
    : path.dirname(site.getFileName())
}

function getMainPluginFromPkg (pkg) {
  return get(pkg, ['bert', 'mainPlugin'])
}

async function resolvePlugin (idResolve, { basedir = nameFunctionIsCall(2) } = {}) {
  return new Promise((resolveAsync, reject) => {
    resolve(idResolve,
      {
        basedir,
        packageFilter (pkg, pkgfile) {
          const main = getMainPluginFromPkg(pkg)
          return Object.assign({}, pkg, {main})
        }
      },
      (err, res, pkg) => {
        if (err) {
          return reject(err)
        } else {
          if (getMainPluginFromPkg(pkg) === undefined) {
            reject( new Error("'bert.mainPlugin' on package.json is not define.") )
          } else {
            resolveAsync({
              mainFile:res,
              setup: pkg.bert.setup
            })
          }
        }
      })
  })
}

/**
 * Scan a plugin
 */
async function scanPlugin (idResolve, {
  basedir = nameFunctionIsCall(2),
  setupName
} = {}) {
  const configPlugin = await resolvePlugin(idResolve, { basedir })

  return new Plugin({
    source: require(configPlugin.mainFile),
    setupName: setupName || configPlugin.setup,
  })
}

/**
 * Scan a Plugins
 */
function scanPlugins ( pathToInspect, _opts = {} ) {
  const opts = parseOpts(_opts)

  return glob.sync( path.join(pathToInspect, '/*/package.json') )
}

/**
 * Use to parse a plugin
 */
function Plugin ({
  source = {},
  setupName = 'setup'
} = {}) {

  this.setup = source[setupName]

}

exports = module.exports = Object.assign(Plugin, {
  resolve: resolvePlugin,
  scanPlugin,
  scanPlugins,
  Plugin,
})

