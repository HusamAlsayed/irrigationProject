const Sequelize = require('sequelize')

const sequelize = require('../utils/database-connection')


const DeviceElectricityHistory = sequelize.define('deviceElectricityHistory',{

    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    },
    state:{
        type:Sequelize.ENUM(['on','of']),
        allowNull:false
    },
})


module.exports = DeviceElectricityHistory