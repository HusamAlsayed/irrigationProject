const Sequelize = require('sequelize')

const sequelize = require('../utils/database-connection')


const ControlLineHistory = sequelize.define('controlLineHistory',{

    id:{
        type:Sequelize.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    },
    state:{
        type:Sequelize.ENUM(['running','stopping','processing']),
        allowNull:false
    },
})


module.exports = ControlLineHistory