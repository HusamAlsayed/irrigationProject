const Sequelize = require('sequelize')

const sequelize = require('../utils/database-connection')


const User = sequelize.define('user',{

    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING(50),
        unique:true,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
    

})

module.exports = User