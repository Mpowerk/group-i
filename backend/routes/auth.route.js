const express = require('express')
const router = express.Router()
const { authController } = require('../controllers/auth.controller')
const { registrationValidation, loginValidation } = require('../middlewares/validate.middleware')


router.post('/register', registrationValidation ,authController.registerUser)


router.post('/login', loginValidation, authController.loginUser)

module.exports = router