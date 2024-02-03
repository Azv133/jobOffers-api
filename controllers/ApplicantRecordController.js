const ApplicantRecord = require('../models/ApplicantRecord')

exports.appliedJobOffer = async(req, res) => {
    const { id_applicant, id_job } = req.body
    const conditions = {
        fields: ['id_applicant', 'id_job'],
        values: [id_applicant, id_job]
    }
    const { status, result } = await ApplicantRecord.get([], conditions)

    if(status){
        if(result.length === 0){
            const date = new Date()
            const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
            const res_ = await ApplicantRecord.create([id_applicant, id_job, formattedDate])
            console.log(res_)
            if(res_.status){
                res.status(200).json({
                    status: true,
                    message: 'Postulación exitosa!'
                }); 
            }else{
                res.status(500).json({
                    status: false,
                    message: 'Ocurrió un error al realizar la postulación'
                }); 
            }
        }else{
            res.status(200).json({
                status: true,
                message: 'Postulación actualizada exitosamente!'
            }); 
        }
    }else{
        res.status(500).json({
            status: false,
            message: 'Ocurrió un error al realizar la postulación'
        });
    }
}