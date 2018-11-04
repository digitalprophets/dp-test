const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('config');

// name of the current file
const basename = path.basename(module.filename);

// object to store all models and connection object
const db = config.get('db');

// connect to database server
const sq = new Sequelize('', db.username, db.password, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 1,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

// create database if not exits
sq.query('CREATE DATABASE IF NOT EXISTS dptest');

// connect to database
const sequelize = new Sequelize(db.name, db.username, db.password, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
    
console.log('Connected to database');

// load all models into db object
fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = sequelize['import'](path.join(__dirname, file));
        model.sync();
        db[model.name] = model;
    });

// add foreign key constraints
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
