import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/auth/'
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