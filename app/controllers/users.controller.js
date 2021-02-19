const User = require('../models/User')
//const { validationResult } = require('express-validator')
//const config = require('config')

exports.me = async (req, res) => {
	const {userId} = req.query
	//console.log(req)
	const me = await User.findByPk(userId, {attributes: {exclude: ['password']}})
	const user = me.dataValues
	user.sex = (await me.getSex({raw: true})).name
	return res.status(200).json({user})
}