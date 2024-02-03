const express = require('express')
const controller = require('../controllers/ApplicantController')

const router = express.Router()

const path = 'applicant'

router.post(`/${path}/login`, controller.login)

module.exports = router