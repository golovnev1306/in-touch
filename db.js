const { Sequelize } = require('sequelize')
const config = require('config')

module.exports = new Sequelize(
	config.get('db.name'), 
	config.get('db.username'), 
	config.get('db.password'), {
		host: config.get('db.host'),
		dialect: config.get('db.type')
	}
);