const express = require('express')
const config = require('config')
const cors = require('cors')
const app = express()
const routers = require('./routers/index')
const db = require('./db')

app.use(cors())

const start = async () => {
	try {
	  await db.authenticate()
	  console.log('Connection has been established successfully.')
	} catch (error) {
	  console.error('Unable to connect to the database:', error)
	}
	
	const PORT = config.get('port')
	
	app.use(express.json())
	app.use('/api/auth', routers.auth(express))

	app.use(function(req, res) {
			res.status(404).json({message: 'По адресу ничего нет', isSuccess: false})
	})

	app.listen(PORT, () => console.log("Прослушивание сервера было начато на порту", PORT))
	
}


start();
