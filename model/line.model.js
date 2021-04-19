const Sequelize = require('sequelize')

const sequelize = require('../utils/database-connection')


const ControlLine = sequelize.define('controlLine',{

    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    },
    state:{
        type:Sequelize.ENUM(['pump','plunger','switch']),
        allowNull:false
    },
})


module.exports = ControlLine