const sequelize = require('../config/db.config')
// IMPORT USER MODEL
const User = require('../models/user.model')


module.exports.profileController = {

    updateProfile: async(req, res) => {

        try {

            // GET ID OF CURRENT USER
            const currentUserId = req.params.id

            // CHECK IF CONNECTION TO THE DATABASE IS ESTABLISHED
            await sequelize.authenticate()
            console.log('You have connected to the database')

            if(req.authErrMessage) {
                throw new Error(req.authErrMessage)
            } else {
                // connect the model to the database
                User.sync({ alter: true })

                // IF USER IS A DOCTOR
                if(req.body.user_role == 'doctor') { 
                    const { firstname, lastname, email, phonenumber, about, yearsOfExperience, facility, profile_picture, address } = req.body

                    // UPDATE DOCTOR'S INFORMATION
                   const updatedDoctor = await User.update({...req.body}, {
                        where: {
                            user_id: currentUserId
                        }
                    })

                    console.log(updatedDoctor)

                    res.json({error: null, success: true, user: 'specify user'})
                } 
                else if ( req.body.user_role == 'patient' ){ // USER IS A PATIENT

                    const { firstname, lastname, email, phonenumber, dateOfBirth, gender, hasMedicalAid, profile_picture } = req.body

                    // UPDATE PATIENT INFORMATION
                    const updatedPatient = await User.update({...req.body}, {
                        where: {
                            user_id: currentUserId
                        }
                    })

                    // GET THE UPDATED USER 

                    const getUpdatedUser = await User.findAll({
                        where: {user_id: currentUserId}
                    })

                    console.log(getUpdatedUser )

                    res.json({error: null, success: true, user: getUpdatedUser[0] })
                } else {
                    // The USER IS AN ADMIN
                    res.json('user not updated')
                }
            }

        } catch(error) {
            res.json({error: error.message, success: false, user: null})
            console.log(error)
        }

    }


}