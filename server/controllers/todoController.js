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
  },
  create(req, res) {
    const text = req.body.text
    if (!text) {
      res.status(200).json(util.format('请求数据为空，请重新输入', null))
    }
    todoModel.create(text)
    .then(list =>{
      res.status(200).json(util.format(null, list))
    })
    .catch(err => {
      res.status(500).json(util.format(err, null))
    })
  },
  update(req, res) {
    const {text, id} = req.body
    if (!text || !id) {
      res.status(200).json(util.format('请求数据为空，请重新输入', null))
    }
    todoModel.updateById({name: text, _id: id})
    .then(list =>{
      res.status(200).json(util.format(null, list))
    })
    .catch(err => {
      res.status(500).json(util.format(err, null))
    })
  },
  delete(req, res) {
    const _id = req.body.id
    if (!_id) {
      res.status(200).json(util.format('请求数据为空，请重新输入', null))
    }
    todoModel.delete(_id)
    .then(list =>{
      res.status(200).json(util.format(null, list))
    })
    .catch(err => {
      res.status(500).json(util.format(err, null))
    })
  }
}
