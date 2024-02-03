const createModel = require("../data_base/createModel");

const JobOffer = createModel('Job_offer', [
    'id',
    'id_company',
    'title',
    'description',
    'job_title',
    'salary',
    'start_date',
    'end_date',
    'profession',
    'modality'
]);

module.exports = JobOffer;