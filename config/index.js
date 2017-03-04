const {URLMongoDB} = require('./connectConfig')

exports = module.exports = {
  port: process.env.PORT || '3000',
  address: process.env.ADDRESS || '::',
  parseAddress,
  mongos: ((process.env.DB_MONGOS || 'off') === true),
  db: URLMongoDB
}

function parseAddress (add) {
  return (add === '::' || add === '0.0.0.0')
    ? 'localhost'
    : add
}

