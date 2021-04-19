const Sequelize = require('sequelize')

const sequelize = require('../utils/database-connection')

const {days,hours,minutes} = require('../utils/schedule-utils');

const PlanSchedule = sequelize.define('planSchedule',{

    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    },
    day:{
        type:Sequelize.ENUM(days)
    },
    hour:{
        type:Sequelize.ENUM(hours)
    },
    minute:{
        type:Sequelize.ENUM(minutes)
    }
});

module.exports = PlanSchedule