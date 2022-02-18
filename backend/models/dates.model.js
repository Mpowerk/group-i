const { Sequelize } = require('sequelize')
const sequelize = require('../config/db.config')
const { DataTypes } = Sequelize

const availableDate = sequelize.define('availableDate', {
    date_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    date: {
        type: DataTypes.Date,
        defaultValue: Date.now
    },

    doctor_id: {
        type: DataTypes.INTEGER
    },

    availability_status: {
        type: DataTypes.STRING,
        defaultValue: 'available'
    }
})

module.exports = availableDate