const jwt = require('jsonwebtoken')
const config = require('config')


module.exports = (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            token = req.headers.authorization.split(' ')[1]
        }

        if (token) {
            req.userData = jwt.verify(token, config.get('secretKey'), (error) => {
                if (error) {
                    return res.status(403).json({message: 'Ошибка доступа', isSuccess: false})
                }
            })

            next();
        }
        return res.status(403).json({message: 'Ошибка доступа', isSuccess: false})

    } catch (e) {
        return res.status(500).json({message: 'Что-то пошло не так', isSuccess: false})
    }

}