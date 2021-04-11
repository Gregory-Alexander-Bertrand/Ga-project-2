const wordControllers = require('../controllers/wordControllers')
const express = require('express')
const wordRoutes = express.Router()

wordRoutes.post('/search', wordControllers.search)
module.exports = wordRoutes