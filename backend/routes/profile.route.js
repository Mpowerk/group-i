const express = require('express')
const router = express.Router()
const { profileValidation } = require('../middlewares/validate.middleware')
const { profileController } = require('../controllers/profile.controller')

router.put('/update-profile/:id', profileValidation, profileController.updateProfile )


module.exports = router

