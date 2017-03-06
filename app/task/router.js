const Router = require('express').Router
const router = Router()

exports = module.exports = Object.assign({
  api: Router().use('/task', router)
})

