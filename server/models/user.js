const Sequelize=require('sequelize');

const connection = require('../startup/db');

module.exports = (Sequelize, DataTypes) =>
    connection.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
connection.sync().then(function() {

});
