const express = require('express')
const controller = require('../controllers/JobOfferController')

const router = express.Router()

const path = 'jobOffer'

router.get(`/${path}/:profession`, controller.getJobOffers)
router.get(`/${path}/:profession/:id`, controller.getJobOffersByApplicant)

module.exports = router