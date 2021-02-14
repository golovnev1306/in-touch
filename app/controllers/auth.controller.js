const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const config = require('config')

exports.login = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty) {
		return res.status(400).json({message: 'Данные невалидны!', isSuccess: false})
	}
	
	const {email, password} = req.body
	let candidate
	try {
		candidate = await User.findOne({where: {email}, raw: true})
	} catch (error) {
		return res.status(400).json({message: `При запросе к бд произошла ошибка ${error}`, isSuccess: false})
	}
	
	if (!candidate) {
		return res.status(400).json({message: 'Пользователь не найден!', isSuccess: false})
	}
	
	const isEquals = await bcrypt.compare(password, candidate.password)
	if (!isEquals) {
		return res.status(400).json({message: 'Неверный пароль!', isSuccess: false})
	}
	
	const token = await jwt.sign(
		{
			userId: candidate.id,
			first_name: candidate.first_name
		},
		config.get("secretKey")
	)
	
	res.status(200).json({message: 'Все ок!', isSuccess: true, token})
}

exports.registration = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty) {
		return res.status(400).json({message: 'Данные невалидны', isSuccess: false})
	}

	const {first_name, last_name, email, password} = req.body

	const candidate = await User.findOne({where: {email}, raw: true})
	
	if (candidate) {
		return res.status(400).json({message: 'Почта занята', isSuccess: false})
	}
	
	const hash = await bcrypt.hash(password, 12)

	try {
		const newUser = await User.create({
			first_name,
			last_name,
			email,
			password: hash
		})

		const token = await jwt.sign(
			{
				userId: newUser.id,
				first_name: newUser.first_name
			},
			config.get("secretKey")
		)

		res.status(200).json({message: 'Все ок!', isSuccess: true, token})

	} catch (error) {
		res.status(500).json({message: `Ошибка при создании пользователя в бд!\nдоп инфо: ${error}`, isSuccess: false})
	}


}

exports.checkNotExistEmail = async (req, res) => {

	const errors = validationResult(req)
	if (!errors.isEmpty) {
		return res.status(400).json({message: 'Эл почта невалидна!', isSuccess: false})
	}
	const {email} = req.body
	let candidate
	try {
		candidate = await User.findOne({where: {email}, raw: true})
	} catch (error) {
		return res.status(400).json({message: `При запросе к бд произошла ошибка ${error}`, isSuccess: false})
	}

	console.log(email)

	if (candidate) {
		return res.status(400).json({message: 'Такая почта уже существует', isSuccess: false})
	}



	return res.status(200).json({message: 'Такая почта свободна', isSuccess: true})
}

exports.logout = (req, res) => {
	res.status(200).json({message: 'Все ок!', isSuccess: false})
}