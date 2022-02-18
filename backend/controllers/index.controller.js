const sequelize = require('../config/db.config')
// IMPORT USER MODEL
const User = require('../models/user.model')


module.exports.indexController = {

    getDoctors: async (req, res) => {
        console.log('getting doctors')
        try {

            // CONNECT TO THE DATABASE
            sequelize.authenticate()
            // GET THE DOCTORS FROM THE DATABASE
             const doctors = await User.findAll({
                where: { 'user_role': 'doctor' }
             })

             console.log(doctors.dataValues)
             res.json({error: null, success: true, doctors: doctors})
        } catch(error) {
            res.json({error: error.message, success: false, doctors: null})
        }
       
    },

    getCurrentDoctor: async (req, res) => {
        console.log('getting the current doctor')
        try {

            // GET THE ID OF THE DOCTOR
            const id = req.params.id
            // CONNECT TO THE DATABASE
            sequelize.authenticate()

            // GET THE CURRENT DOCTOR USING THE ID
           const currentDoctor = await User.findAll({
                where: { 'user_id': id }
            })

            console.log(currentDoctor[0].dataValues)

            res.json({error: null, success: true, doctor: currentDoctor[0].dataValues})


        } catch(error) {
            res.json({error: error.message, success: false, doctor: null})
            console.log(error)
        }
    }


}