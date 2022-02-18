const sequelize = require('../config/db.config')
// DATES MODEL
const availableDate = require('../models/dates.model')

module.exports.bookingsController = {

    makeABooking: async (req, res) => {

        try {
            const { date_id, customer_user_id, doctor_id, date, availability_status } = req.body

            // CONNECT TO THE DATABASE
            sequelize.authenticate()
            // ADD DATA TO THE TABLE
            const booking = await availableDate.create(req.body)

            console.log(booking)

            res.json({error: null, success: true, scheduledDate: booking})

        } catch(error) {
            res.json({error: error.message, success: false, scheduledDate: null})
            console.log(error)
        }
    }

}