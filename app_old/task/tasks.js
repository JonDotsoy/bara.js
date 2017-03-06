/*  To collection of tasks */
const router = require('express').Router()
const {Task} = require('../models/Task')
const f = require('../util/expressAsync')

router.get('/', f(async (req, res) => {
  const tasks = await Task.find()

  res.json({
    ok: 1,
    tasks
  })
}))

exports = module.exports = router


