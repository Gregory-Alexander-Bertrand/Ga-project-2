const userControllers = require('../controllers/userControllers')
const express = require('express')
const userRoutes = express.Router()

userRoutes.post('/create', userControllers.create)
userRoutes.post('/login', userControllers.login)

module.exports = userRoutes