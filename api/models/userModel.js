// import Sequelize from 'sequelize'
const Sequelize = require('sequelize');
const sequelize = require('../../config/config').sequelize;

const UserModel = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    lastName: {
        type: Sequelize.STRING,
        field: 'last_name' // Will result in an attribute that is firstName when user facing but first_name in the database      
    }
}, {
        // 禁止修改表名
        freezeTableName: true, // Model tableName will be the same as the model name
        tableName: 't_user',
    });

module.exports = UserModel

