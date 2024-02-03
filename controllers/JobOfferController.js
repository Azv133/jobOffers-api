const { raw } = require('../data_base/functions')
const JobOffer = require('../models/JobOffer')

exports.getJobOffers = async(req, res) => {
    const profession = req.params.profession

    const conditions = {
        fields: ['profession'],
        values: [profession]
    }

    const { result, status, message } = await JobOffer.get([], conditions)

    if(status){
        res.status(200).json({
            status: true,
            jobOffers: result,
        });
    }else{
        res.status(500).json({
            error: message
        });
    }
}

exports.getJobOffersByApplicant = async(req, res) => {
    const profession = req.params.profession
    const id_applicant = req.params.id 

    const query = 
    `
    SELECT 
        jo.id,
        jo.title,
        jo.description,
        jo.job_title,
        jo.salary,
        jo.start_date,
        jo.end_date,
        jo.profession,
        jo.modality,
        c.description AS company,
        c.location,
        c.logo,
        CASE 
            WHEN ar.id IS NOT NULL THEN 1
            WHEN ar.id IS NULL THEN 0
        END AS status
    FROM Job_offer jo 
    LEFT JOIN Company c ON jo.id_company = c.id
    LEFT JOIN applicant_record ar ON jo.id = ar.id_job AND ar.id_applicant = ${id_applicant}
    WHERE jo.profession = '${profession}';
    `

    const { result, status, message }  = await raw(query)

    if(status){
        res.status(200).json({
            status: true,
            jobOffers: result,
        });
    }else{
        res.status(500).json({
            error: message
        });
    }
}