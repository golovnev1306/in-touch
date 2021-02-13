const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

exports.login = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty) {
		return res.status(400).json({message: 'Данные невалидны!', isSuccess: false})
	}
	
	const {login, password} = req.body
	let candidate
	try {
		candidate = await User.findOne({where: {login}, raw: true})
	} catch (error) {
		return res.status(400).json({message: `При запросе к бд произошла ошибка ${error}`, isSuccess: false})
	}
	
	if (!candidate) {
		return res.status(400).json({message: 'Пользователь не найден!', isSuccess: false})
	}
	
	const isEquals = bcrypt.compare(password, candidate.password)
	if (!isEquals) {
		return res.status(400).json({message: 'Неверный пароль!', isSuccess: false})
	}
	
	const token = await jwt.sign(
		{
			userId: candidate.id, 
			login: candidate.login
		},
		config.get("secretKey")
	)
	
	res.status(200).json({message: 'Все ок!', isSuccess: true, token})
}

exports.registration = async (req, res) => {
	const {values} = req.body
	console.log(values)
	const {first_name, last_name, email, login, password} = values
	const candidate = await User.findOne({where: {login}, raw: true})
	
	if (candidate) {
		return res.status(400).json({message: 'Пользователь уже существует', isSuccess: false})
	}
	
	const hash = await bcrypt.hash(password, 12)
	
	const newUser = await User.create({
		first_name, 
		last_name, 
		email,
		login,
		password: hash
	})
	
	const token = await jwt.sign(
		{
			userId: candidate.id, 
			login: candidate.login
		},
		config.get("secretKey")
	)
	
	res.status(200).json({message: 'Все ок!', isSuccess: true, token})
}

exports.logout = (req, res) => {
	res.status(200).json({message: 'Все ок!', isSuccess: false})
}