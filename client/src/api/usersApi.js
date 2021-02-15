import axios from 'axios'

const getHeaders = () => {
	const token = JSON.parse(sessionStorage.getItem('userData'))?.token
	let headerOptions = {}

	if (token) {
		headerOptions['authorization'] = `Bearer ${token}`
	}
	
	return {...headerOptions}
}


const instance = axios.create({
  baseURL: 'http://localhost:3001/api/users/',
})

instance.interceptors.request.use((config) => {
	const token = JSON.parse(sessionStorage.getItem('userData'))?.token
    config.headers.authorization =  token ? `Bearer ${token}` : ''
    return config
  })

const me = (userId) => {
	return instance.get(`/me?userId=${userId}`)
}

export default {
	me
}