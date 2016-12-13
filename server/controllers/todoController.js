var todoModel = require('../models/todo.js')
var util = require('../helper/util.js')

module.exports = {
  listAll(req, res){
    todoModel.findAll()
    .then(list =>{
      res.status(200).json(util.format(null, list))
    })
    .catch(err => {
      res.status(500).json(util.format(err, null))
    })
  }
}
