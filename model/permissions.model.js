const Sequelize = require('sequelize')

const sequelize = require('../utils/database-connection')


const Permission = sequelize.define('permission',{
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    },
    typeName:{
        type:Sequelize.ENUM(['read','add'])
    },
});



module.exports = Permission