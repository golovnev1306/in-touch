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

const registration = (first_name, last_name, email, password) => {
	return instance.post('registration', {first_name, last_name, email, password})
}

const login = (email, password) => {
	return instance.post('', {email, password})
}

const checkEmail = (email) => {
	return instance.post('checkEmail', {email})
}

export default {
	registration,
	login,
	checkEmail
}