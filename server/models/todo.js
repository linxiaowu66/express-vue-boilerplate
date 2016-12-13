const mongoose = require('mongoose');

const schema = mongoose.Schema({
  createdAt : { type: Date, default: Date.now },
  name: {type: String, required: true, index: {unique: true}}
})

const todo = mongoose.model('todo', schema);

module.exports = {
  findAll(){
    return todo.find().exec()
  },
  create(params) {
    const instance = new todo({name: params});
    return instance.save();
  },
  updateById(params){
    if (!params._id) {
      return Promise.reject('缺少参数_id');
    }
    return todo.findByIdAndUpdate(params._id, params).exec();
  },
  delete (_id) {
    return todo.remove({ _id }).exec();
  },
}
