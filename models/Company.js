const createModel = require("../data_base/createModel");

const Company = createModel('Company', [
    'id',
    'description',
    'location',
    'logo',
]);

module.exports = Company;