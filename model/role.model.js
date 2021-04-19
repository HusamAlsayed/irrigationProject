const Sequelize = require('sequelize')

const sequelize = require('../utils/database-connection')


const Role = sequelize.define('role',{
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    },
    typeName:{
        type:Sequelize.ENUM(['admin','user'])
    },
});



module.exports = Role