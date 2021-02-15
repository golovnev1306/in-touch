const usersController = require('../app/controllers/users.controller')
//const { check } = require('express-validator')

module.exports = (express) => {
    const router = express.Router()

    router.get('/me', usersController.me)
    return router
}