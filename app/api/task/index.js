const router = require('express').Router()
const bodyParser =require('body-parser')
const {Task} = require('../../models/Task')


router.post('/', bodyParser.json(), async (req, res) => {
  const data = req.data

  const task = new Task( data )

  res.json({
    ok: true,
    ntask: await (task.save())
  })


})


exports = module.exports = router



