import axios from 'axios'

const token = sessionStorage.getItem('token')
let headerOptions = {}

if (token) {
	headerOptions['autorization'] = `Bearer ${token}`
}


const instance = axios.create({
  baseURL: 'http://localhost:3001/api/auth/',
  headers: headerOptions
})

const registration = (values) => {
	return instance.post('registration', {values}).catch(error => {
		return error.response
})
}

const login = (login, password) => {
	return instance.post('', {login, password}).catch(error => {
		return error.response
})
}

export default {
	registration,
	login
}