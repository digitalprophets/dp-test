const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

// name of the current file
const basename = path.basename(module.filename);

// object to store all models and connection object
const db = {};

// connect to database
const sequelize = new Sequelize('dptest', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
});

// check if connection is successfull
sequelize
    .authenticate()
    .then( () => {
        console.log('Connected to database');
    })
    .catch( err => {
        console.log('Failed to connect to the database', err);
    });

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