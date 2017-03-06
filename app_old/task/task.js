/* to single task */
const bodyParser = require('body-parser')
const t = require('../util/expressAsync')
const router = require('express').Router()

router.post('/', bodyParser.json(), t(async (req, res) => {
  const body = req.body

  res.json({
    body
  })

}))

router.get('/:id', async (req, res) => {
  res.json({
    ok: 1,
    task: '/task'
  })
})

exports = module.exports = router

