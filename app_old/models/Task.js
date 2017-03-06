const {connect} = require('../services/connect')

const Task = connect.model('Task', new connect.Schema({
  title: 'string',
}))

exports = module.exports = {
  model: Task,
  Task
}

