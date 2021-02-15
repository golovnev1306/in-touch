const User = require('../models/User')
//const { validationResult } = require('express-validator')
//const config = require('config')

exports.me = async (req, res) => {
	const {userId} = req.query
	//console.log(req)
	const me = await User.findByPk(userId, {attributes: {exclude: ['password']}})
	console.log(me)
	console.log(Object.keys(me))
	return res.status(200).json({me})
}