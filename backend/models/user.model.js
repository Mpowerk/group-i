const { Sequelize } = require('sequelize')
const sequelize = require('../config/db.config')
const { DataTypes } = Sequelize

const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'patient'
    },

    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: true
    },

    gender: {
        type: DataTypes.STRING,
        defaultValue: ''
    },

    has_medical_aid: {
        type: DataTypes.STRING,
        defaultValue: ''
    },

    profile_picture: {
        type: DataTypes.STRING,
        defaultValue: ''
    },

    about: {
        type: DataTypes.STRING,
        defaultValue: 'Dr. Usman Yousaf is a specialist in the treatment of coronary artery disease, cardiac failure'
    },

    doctor_id: {
        type: DataTypes.STRING,
        defaultValue: ''
    },

    years_of_experience: {
        type: DataTypes.STRING,
        defaultValue: ''
    },

    practice_facility: {
        type: DataTypes.STRING,
        defaultValue: ''
    },

    address: {
        type: DataTypes.STRING,
        defaultValue: '62 Fulham RdBrixton, Johannesburg, 2019'
    }

})

module.exports = User