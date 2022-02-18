const Joi = require('joi')

const registrationValidation = (req, res, next) => {
    const { first_name, last_name, email, phone_number, password } = req.body
    
    const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required().email(),
        phone_number: Joi.string().min(10).max(16).pattern(/^[0-9]+$/).required(),
        password: Joi.string().required().min(8)
    })

    const { error, value} = schema.validate({first_name, last_name, email, phone_number, password})
    
    if (  error != undefined && error.details[0].type == 'string.pattern.base' ) {
        error.details[0].message = 'Phone number must consist of only numbers'
    }
    
    req.authErrMessage = error == undefined ? undefined : error.details[0].message
    req.authenticatedUser = value
    console.log(req.authErrMessage)
    next()
    
}


// LOGIN VALIDATION
const loginValidation = (req, res, next) => {

    const { email, password } = req.body

    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(8).required()
    })

    const { error, value } = schema.validate({email, password})

    req.authErrMessage = error == undefined ? undefined : error.details[0].message
    req.authenticatedUser = value
    console.log(req.authErrMessage)
    next()

}


// UPDATE PROFILE VALIDATION
const profileValidation = (req, res, next) => {

    // CHECK IF USER IS A DOCTOR/PATIENT
    if(req.body.user_role == 'doctor') {

        const { first_name, last_name, email, phone_number, about, years_of_experience, practice_facility, profile_picture, address } = req.body
        
        const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required().email(),
        phone_number: Joi.string().min(10).max(16).pattern(/^[0-9]+$/).required(),
        gender: Joi.string(),
        address: Joi.string(),
        about: Joi.string().max(255),
        practice_facility: Joi.string(),
        years_of_experience: Joi.string().pattern(/^[0-9]+$/),
        profile_picture: Joi.string()
    })

     const { error, value} = schema.validate({first_name, last_name, email, phone_number, about, years_of_experience, practice_facility, profile_picture, address})
    
        if (  error != undefined && error.details[0].type == 'string.pattern.base' ) {
            error.details[0].message = 'Phone number must consist of only numbers'
        }

        req.authErrMessage = error == undefined ? undefined : error.details[0].message
        req.authenticatedUser = value
        console.log(req.authErrMessage)
        next()

    } // END OF DOCTOR'S UPDATE INFO FUNCTION
    else {
        // START OF PATIENT UPDATE INFO FUNCTION
        const { first_name, last_name, email, phone_number, date_of_birth, gender, has_medical_aid, profile_picture } = req.body

         const schema = Joi.object({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            email: Joi.string().required().email(),
            phone_number: Joi.string().min(10).max(16).pattern(/^[0-9]+$/).required(),
            date_of_birth: Joi.string(),
            gender: Joi.string(),
            has_medical_aid: Joi.string(),
            profile_picture: Joi.string()
          })

          const { error, value} = schema.validate({first_name, last_name, email, phone_number, date_of_birth, gender, has_medical_aid, profile_picture})
    
            if (  error != undefined && error.details[0].type == 'string.pattern.base' ) {
                error.details[0].message = 'Phone number must consist of only numbers'
            }

        req.authErrMessage = error == undefined ? undefined : error.details[0].message
        req.authenticatedUser = value
        console.log(req.authErrMessage)
        next()
    }


}


module.exports = { registrationValidation, loginValidation, profileValidation  }