const jwt = require('jsonwebtoken')
const config = require('config')


module.exports = async(req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            token = req.headers.authorization.split(' ')[1]
        }

        if (token) {
            jwt.verify(token, config.get('secretKey'), (error, decoded) => {
                if (error) {
                    return res.status(403).json({message: 'Ошибка доступа', isSuccess: false})
                }

				req.userData = decoded
            })

            next()
        } else {
			return res.status(403).json({message: 'Ошибка доступа', isSuccess: false})
		}


    } catch (e) {
        return res.status(500).json({message: 'Что-то пошло не так', isSuccess: false})
    }

}