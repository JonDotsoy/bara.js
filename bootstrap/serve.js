require('dotenv').config({ silent: true })

const path = require('path')

process.chdir(path.join(__dirname, '..'))

const isFunction = require('lodash/isFunction')
const express = require('express')
const apiRouter = require('express').Router()
const chalk = require('chalk')
const glob = require('glob')
const url = require('url')
const config = require('../config')
// const {connect} = require('../app/services/connect')

const app = express()

app.set('engine', 'jade')

// Load Middleware

// Load router
const configsRouter = glob
  .sync('app/*/router.js')
  .map(e => path.resolve(e))
  .map(require)

const routersToGlobal = configsRouter
  .map(e => e.router)
  .filter(e => isFunction(e))

const routersToAPI = configsRouter
  .map(e => e.api)
  .filter(e => isFunction(e))

routersToGlobal.forEach(r => app.use(r))
routersToAPI.forEach(r => apiRouter.use(r))

app.use('/api', apiRouter)

app.use('/api', (req, res) => {
  res
    .status(404)
    .json({
      ok: false,
      error: ['NOT_FOUND']
    })
})

const server = app.listen(config.port, config.address, () => {
  const {port, address} = server.address()

  console.log('Ok server: ' + chalk.yellow('%s'), url.format({
    protocol: 'http',
    hostname: config.parseAddress(address),
    port
  }))
})

