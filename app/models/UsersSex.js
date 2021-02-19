const {DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

module.exports = sequelize.define('Sex', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    }
}, {timestamps: false, tableName: 'users_sex'});