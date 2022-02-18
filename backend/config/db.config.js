require('dotenv').config()
const { Sequelize } = require('sequelize')
const { DataTypes } = Sequelize

const sequelize = new Sequelize('doctorsappointment',
                     process.env.DB_USER,
                     process.env.DB_PASSWORD,
                     {
                         host: 'localhost',
                         port: process.env.DB_PORT,
                         dialect: 'postgres'
                     }
                     )


module.exports = sequelize