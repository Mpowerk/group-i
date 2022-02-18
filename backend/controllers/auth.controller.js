const sequelize = require('../config/db.config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// IMPORT USER MODEL
const User = require('../models/user.model')


const maxAge = 2 * 24 * 60 * 60 * 1000

const createToken = (id) => {
    console.log('reached createToken')
    return jwt.sign({id}, 'a very big secret', {expiresIn: maxAge})
}


module.exports.authController = {
    
    registerUser: async (req, res) => {
    
        try {

            const { first_name, last_name, email, phone_number, password } = req.body

            // CHECK IF CONNECTION TO DATABASE IS ESTABLISHED
            await sequelize.authenticate()
            console.log('You are connected to the database')
            console.log('req error: ', req.authErrMessage)
            if(req.authErrMessage){
               throw new Error(req.authErrMessage) 
            } else {
                // connect the model to the database table
                 User.sync({alter: true})

                // CHECK IF USER IS ALREADY REGISTERED
                const getUserByEmailQuery = await User.findAll({ where: {email: email }, limit: 1   })
                const returnedEmail = ( getUserByEmailQuery.length == 0 )  ? undefined : getUserByEmailQuery[0].dataValues.email
                console.log('returned email', returnedEmail)
                if(returnedEmail) {
                    throw new Error("Email address is already registered")
                }else {

                // HASH THE USER PASSWORD
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(req.authenticatedUser.password, salt)
                console.log(hashedPassword)
                req.authenticatedUser.password = hashedPassword
                const user = await User.create(req.authenticatedUser)
                console.log('saved user is:', user.dataValues)

                const token = createToken(user.dataValues)
                res.cookie('user', token, {httpOnly: true, sameSite: true, maxAge})
               return res.json({error: null, success: true, user: user.dataValues, token })

            }
        }

        } catch(error) {
            res.json({error: error.message, success: false, user: null})
            console.log(error)
        }
    },

    // LOGIN USER
    loginUser: async (req, res) => {
        try {

            // GET DATA FROM LOGIN FORM
            const { email, password } = req.body

            // CHECK IF CONNECTION TO THE DATABASE IS ESTABLISHED
           await sequelize.authenticate()
           console.log('connected to the database')
           
           // CHECK IF USER IS ALREADY REGISTERED
           const getUserByEmailQuery = await User.findAll({ where: {email: email }, limit: 1   })
           const returnedEmail = ( getUserByEmailQuery.length == 0 )  ? undefined : getUserByEmailQuery[0].dataValues.email
           const returnedPassword = (getUserByEmailQuery.length == 0 ) ? undefined : getUserByEmailQuery[0].dataValues.password
        
        if(returnedEmail){
                // CHECK IF THE ENTERED PASSWORD MATCHES THE ONE FROM DATABASE
                const doesMatch = await bcrypt.compare(password, returnedPassword)

                if(!doesMatch) {
                    throw new Error("email/password is incorrect")
                }   
                // EMAIL AND PASSWORD does MATCH
                 console.log('You have successfully logged in')

                const returnedUser = await User.findAll({where: {
                    'user_id': getUserByEmailQuery[0].dataValues.user_id
                }})
                 const token = createToken(getUserByEmailQuery[0].dataValues)

                 res.cookie('user', token, {httpOnly: true, sameSite: true, maxAge})
                 
                 res.json({error: null, success: true, user: returnedUser[0].dataValues, token})
           } else {
                throw new Error("Email address is not registered")
           }

        } catch(error) {
            res.json({error: error.message, success: false, user: null})
            console.log(error)
        }
    }
  

}