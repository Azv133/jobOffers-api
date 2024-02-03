const Applicant = require('../models/Applicant')

exports.login = async(req, res) => {
    const {email, password} = req.body;
    const conditions = {
        fields: ['email', 'password'],
        values: [email, password]
    }
    
    const {result, status, message} = await Applicant.get([], conditions);

    if(status){
        if(result != null && result.length > 0){
            res.status(200).json({
                status: true,
                applicant: result[0],
                message: 'Bienvenido al sistema'
            });
        }else{
            res.status(200).json({
                status: false,
                message: 'Credenciales erróneas'
            });
        }
    }else{
        res.status(500).json({
            error: message
        });
    }
}