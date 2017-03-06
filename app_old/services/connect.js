const mongoose = require('mongoose')
const url = require('url')
const config = require('../../config')

const connect = mongoose.connect(config.db)

exports = module.exports = {
  connect
}

