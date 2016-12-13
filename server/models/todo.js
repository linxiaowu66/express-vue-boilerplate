const mongoose = require('mongoose');

const schema = mongoose.Schema({
  createdAt : { type: Date, default: Date.now },
  name: {type: String, required: true, index: {unique: true}}
})

const todo = mongoose.model('todo', schema);

module.exports = {
  findAll(){
    return todo.find().exec()
  }
}
