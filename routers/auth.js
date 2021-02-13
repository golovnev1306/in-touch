const authController = require('../app/controllers/auth.controller')
const { check } = require('express-validator')

module.exports = (express) => {
	const router = express.Router()
	
	router.get('/', authController.login)
	router.post('/', [check('login').exists().trim(), check('password').isLength({ min: 6 }).trim()], authController.login)
	router.post('/registration', authController.registration)
	router.delete('/', authController.logout)
	
	return router
}