const {Sequelize,DataTypes , queryInterface} = require('sequelize')
const sequelize = new Sequelize('irrigation','root','',{
    host: 'localhost',
    dialect:'mysql',
    logging:false
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((err)=>console.log("ERROR", err));

module.exports = sequelize