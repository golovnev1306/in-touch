const {DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

module.exports = sequelize.define('User', {

  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
	unique: true
  },
  login: {
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
  createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
  }
});