const express = require('express')
const controller = require('../controllers/ApplicantRecordController')

const router = express.Router()

const path = 'applicantRecord'

router.post(`/${path}`, controller.appliedJobOffer)

module.exports = router