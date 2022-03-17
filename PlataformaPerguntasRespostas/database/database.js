const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','galoDODO1-',{
    host:'localhost',
    dialect: 'mysql'
});
module.exports = connection;