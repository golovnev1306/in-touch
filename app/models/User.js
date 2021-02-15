const {DataTypes} = require('sequelize')
const sequelize = require('../../db.js')
const UsersSex = require('./UsersSex.js')


const User = sequelize.define('user', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
	sex_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
    }
})

User.hasOne(UsersSex, {foreignKey: 'id', sourceKey: 'sex_id', onDelete: "restrict"})

module.exports = User

