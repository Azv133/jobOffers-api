const createModel = require("../data_base/createModel");

const Applicant = createModel('Applicant', [
    'id',
    'Names',
    'email',
    'password',
    'profession',
]);

module.exports = Applicant;