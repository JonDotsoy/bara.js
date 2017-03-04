const router = require('express').Router()

router.use('/monitor', require('./monitor'))
router.use('/task', require('./task'))

// 404
router.use('*', (req, res) => {
  res.status(404).json({
    ok: false,
    code: 404,
    error: ['NOT_FOUND']
  })
})

exports = module.exports = router

