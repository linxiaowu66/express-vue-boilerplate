const express = require('express')
const router = express.Router()

const todoController = require('../controllers/todoController.js')

router.get('/todo/list', todoController.listAll)
router.post('/todo/add', todoController.create)
router.post('/todo/update', todoController.update)
router.post('/todo/delete', todoController.delete)
module.exports = router;
