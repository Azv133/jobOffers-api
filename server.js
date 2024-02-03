const express = require('express')
require('dotenv').config()
const cors = require('cors')
const db = require('./config/db')
const app = express()

const port = process.env.PORT

const applicantRouter = require('./routes/ApplicantRoutes')
const jobOfferRouter = require('./routes/JobOfferRoutes')
const applicantRecordRouter = require('./routes/ApplicantRecordRoutes')

app.use(cors())
app.use(express.json())
app.use(applicantRouter)
app.use(jobOfferRouter)
app.use(applicantRecordRouter)

global.APP_NAME = 'FirstJob';

app.listen(port, () => {
    console.log('La aplicación está funcionando...')
})

db.connect()