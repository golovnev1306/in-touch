const {DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

module.exports = sequelize.define('users_sex', {

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
}, {timestamps: false});