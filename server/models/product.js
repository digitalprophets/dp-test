const Sequelize=require('sequelize');

const connection = require('../startup/db')

module.exports = (Sequelize, DataTypes) =>
    connection.define('Product',{
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        category: DataTypes.STRING,
        description: DataTypes.TEXT,
        //image: DataTypes.
    });

connection.sync().then(function() {
    
});
