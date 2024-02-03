const createModel = require("../data_base/createModel");

const ApplicantRecord = createModel('applicant_record', [
    'id',
    'id_applicant',
    'id_job',
    'date',
]);

module.exports = ApplicantRecord;