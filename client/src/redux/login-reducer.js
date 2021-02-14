import authApi from '../api/authApi'
import {initializeApp, setMessage, switchIsLoadingAC} from "./app-reducer";

const initialState = {
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		default: return state;
	}
}

export const registration = (values) => {
	return async (dispatch) => {
		dispatch(switchIsLoadingAC(true))
		const {first_name, last_name, email, password} = values
		try {
			const result = await authApi.registration(first_name, last_name, email, password)
			if (result.data?.token) {
				sessionStorage.setItem('token', result.data.token)
				dispatch(initializeApp())
			}
		} catch (error) {
			dispatch(setMessage({body: error.response?.data.message, isSuccess: error.response?.data.isSuccess}))
		}

		dispatch(switchIsLoadingAC(false))
	}
}

export const login = (email, password) => {
	return async (dispatch) => {
		dispatch(switchIsLoadingAC(true))
		try {
			const result = await authApi.login(email, password)
			if (result.data?.token) {
				sessionStorage.setItem('token', result.data.token)
				dispatch(initializeApp())
			}
		} catch (error) {
			dispatch(setMessage({body: error.response?.data.message, isSuccess: error.response?.data.isSuccess}))
		}

		dispatch(switchIsLoadingAC(false))
	}
}

export const logout = () =>{
	return (dispatch) => {
		try {
			sessionStorage.removeItem('token')
		} catch (error) {
			console.log("error", error)
		}
		dispatch(initializeApp())
	}
}




export default loginReducer;