const todoController = require('../controllers/todoController.js')

exports = module.exports = [
  {
    method: 'GET',
    route: '/todo/list',
    handlers: [
      todoController.listAll
    ]
  },
  {
    method: 'POST',
    route: '/todo/add',
    handlers: [
      todoController.create
    ]
  },
  {
    method: 'POST',
    route: '/todo/update',
    handlers: [
      todoController.update
    ]
  },
  {
    method: 'POST',
    route: '/todo/delete',
    handlers: [
      todoController.delete
    ]
  }
]

