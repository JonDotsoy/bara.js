const router = require('express').Router()

router.use('/task', require('../task/task'))
router.use('/tasks', require('../task/tasks'))

// 404
router.use('*', (req, res) => {
  res.status(404).json({
    ok: false,
    code: 404,
    error: ['NOT_FOUND']
  })
})

router.use('*', (err, req, res, next) => {
  res
  .status('500')
  .json({
    ok: false,
    code: 500,
    error: [
      {
        name: err.name,
        description: err.description,
        stack: err.stack,
      }
    ]
  })
})

exports = module.exports = router

