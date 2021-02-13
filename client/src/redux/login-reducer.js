import authApi from '../api/authApi'

const SWITCH_LOGIN_STATUS = 'SWITCH_LOGIN_STATUS'
const SWITCH_IS_LOADING = 'SWITCH_IS_LOADING'

const initialState = {
	isAuthentificated: false,
	isLoading: false
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case SWITCH_LOGIN_STATUS: {
			return {
				...state,
				isAuthentificated: action.isAuthentificated
			}
		}
		case SWITCH_IS_LOADING: {
			return {
				...state,
				isLoading: action.isLoading
			}
		}
		
		default: return state;
	}
}

export const switchLoginStatusAC = (isAuthentificated) => {
	return {
		type: SWITCH_LOGIN_STATUS,
		isAuthentificated
	}
}

export const switchIsLoadingAC = (isLoading) => {
	return {
		type: SWITCH_IS_LOADING,
		isLoading
	}
}


export const registration = (values) => {
	return async (dispatch) => {
		dispatch(switchIsLoadingAC(true))
		const result = await authApi.registration(JSON.stringify(values))
		console.log(result)
		if (result.token) {
			sessionStorage.setItem('token', result.token)
		} else {
			console.log ('Сервер вернул сообщение с ошибкой:', result)
		}
		
		dispatch(switchIsLoadingAC(false))
	}
}

export const login = (login, password) => {
	return async (dispatch) => {
		dispatch(switchIsLoadingAC(true))
		const result = await authApi.login(login, password)
		
		
		if (result?.token) {
			sessionStorage.setItem('token', result.token)
			dispatch(switchLoginStatusAC(true))
		} else {
			console.log ('Сервер вернул сообщение с ошибкой:', result.data.message)
		}
		
		dispatch(switchIsLoadingAC(false))
	}
}



export default loginReducer;