const wordControllers = require('../controllers/wordControllers')
const express = require('express')
const wordRoutes = express.Router()

wordRoutes.post('/search', wordControllers.search)
wordRoutes.put('/update', wordControllers.update)
wordRoutes.post('/save', wordControllers.save)
wordRoutes.post('/create', wordControllers.create)
// wordRoutes.get('/findAll', wordControllers.findAll)
module.exports = wordRoutes