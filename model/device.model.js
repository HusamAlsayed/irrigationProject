const Sequelize = require('sequelize')

const sequelize = require('../utils/database-connection')


const Device = sequelize.define('device',{

    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    },
    serialNumber:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING(50),
        allowNull:false
    }
})


module.exports = Device