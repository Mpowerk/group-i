const express = require('express')
const router = express.Router()
const { indexController } = require('../controllers/index.controller')


router.get('/', indexController.getDoctors )
router.get('/:id', indexController.getCurrentDoctor )

module.exports = router

