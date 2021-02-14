const userController = require('../app/controllers/user.controller')
//const { check } = require('express-validator')

module.exports = (express) => {
    const router = express.Router()

    router.get('/', userController.me)
    return router
}