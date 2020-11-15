const config = require('../config/environment');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password, {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const Stop = require("./stop")(sequelize, Sequelize)

module.exports = {
    sequelize: sequelize,
    Stop: Stop
}