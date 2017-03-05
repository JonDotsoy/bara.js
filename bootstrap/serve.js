require('dotenv').config({ silent: true })

const express = require('express')
const chalk = require('chalk')
const url = require('url')
const config = require('../config')
const {connect} = require('../app/services/connect')

const app = express()

app.set('engine', 'jade')

app.use('/api', require('../app/api'))

const server = app.listen(config.port, config.address, () => {
  const {port, address} = server.address()

  console.log('Ok server: ' + chalk.yellow('%s'), url.format({
    protocol: 'http',
    hostname: config.parseAddress(address),
    port
  }))
})

