const {Sequelize , DataTypes, Model} = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite', 
    storage: './restaurant.sqlite',
    logging: false
})

module.exports = {sequelize, DataTypes, Model}