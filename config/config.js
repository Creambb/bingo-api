
const Sequelize = require('sequelize');
// import Sequelize from 'sequelize';

const config = {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    database: 'bingo',
    user: 'root',
    password: '123456',
};

var sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port,

    // pool: {
    //     max: 5,
    //     min: 0,
    //     idle: 10000
    // },

});

module.exports = { sequelize }