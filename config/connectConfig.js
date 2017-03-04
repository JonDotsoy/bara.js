const url = require('url')

const regexpName = /^DB_HOST(_?[0-9]*)$/

function loadHosts (_cfg = process.env) {
  // Set default config
  const cfg = Object.assign({
    DB_HOST: 'localhost',
  }, _cfg)

  const hosts = Object.keys(cfg)
  .map((name) => {
    let result
    if ((result = regexpName.exec(name)) !== null) {
      return result
    } else {
      return false
    }
  })
  .filter(Boolean)
  .map((result) => {
    return {
      host: cfg[result[0]],
      port: cfg[`DB_PORT${result[1]}`] || '27017'
    }
  })

  return hosts
}

function loadURLMongoDB (cfg = process.env) {
  const hosts = loadHosts(cfg)

  return url.format({
    slashes: true,
    protocol: 'mongodb',
    host: hosts.map(e => url.format({hostname: e.host, port: e.port})).join(','),
    pathname: cfg.DB_DATABASE || 'test'
  })
}

exports = module.exports = {
  loadHosts,
  loadURLMongoDB,
  URLMongoDB: loadURLMongoDB(),
}

