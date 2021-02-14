const authController = require('../app/controllers/auth.controller')
const { check } = require('express-validator')

module.exports = (express) => {
	const router = express.Router()
	
	router.get('/', authController.login)
	router.post('/', [check('email').trim().exists(), check('password').trim().exists()], authController.login)
	router.post('/registration', [
		check('email').trim().exists().isEmail().normalizeEmail(),
		check('first_name').trim().exists(),
		check('last_name').trim().exists(),
		check('password').trim().exists().isLength({ min: 6 }),
	], authController.registration)
	router.post('/checkEmail', [check('email').exists().trim().isEmail().normalizeEmail()], authController.checkNotExistEmail)
	router.delete('/', authController.logout)
	
	return router
}