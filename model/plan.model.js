const Sequelize = require('sequelize')

const sequelize = require('../utils/database-connection')


const Plan = sequelize.define('plan',{

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
    startTime:{
        type:Sequelize.DATE,
        allowNull:false
    },
    endTime:{
        type:Sequelize.DATE,
        allowNull:false
    },
    period:{
        type:Sequelize.DATE,
        allowNull:false
    }

})

module.exports = Plan