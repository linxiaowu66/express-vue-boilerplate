const express = require('express')
const router = express.Router()

const todoController = require('../controllers/todoController.js')

router.get('/todo/list', todoController.listAll)

module.exports = router;
