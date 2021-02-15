import authApi from '../api/authApi'
import {logout} from './login-reducer'
import {setMe, setUserId, getMeInfo} from './users-reducer'

const SWITCH_LOGIN_STATUS = 'SWITCH_LOGIN_STATUS'
const SWITCH_IS_LOADING = 'SWITCH_IS_LOADING'
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
const INITIALIZED_START = 'INITIALIZED_START'
const SET_MESSAGE = 'SET_MESSAGE'

const initialState = {
	isAuthentificated: false,
	isLoading: false,
	isInitialized: false,
	message: {
		body: null,
		isSuccess: false
	}
};

const appReducer = (state = initialState, action) => {
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
		case INITIALIZED_SUCCESS: {
			return {
				...state,
				isInitialized: true
			}
		}
		case INITIALIZED_START: {
			return {
				...state,
				isInitialized: false
			}
		}
		case SET_MESSAGE: {
			return {
				...state,
				message: {
					body: action.message.body,
					isSuccess: !!action.message.isSuccess
				}
			}
		}
		
		default: return state;
	}
}

export const switchLoginStatusAC = (isAuthentificated) => ({type: SWITCH_LOGIN_STATUS, isAuthentificated})
export const switchIsLoadingAC = (isLoading) => ({type: SWITCH_IS_LOADING, isLoading})
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
export const initializedStart = () => ({type: INITIALIZED_START})
export const setMessage = (message) => ({type: SET_MESSAGE, message})



export const initializeApp = () => {
	return async (dispatch) => {
		dispatch(initializedStart())
		const userData = await JSON.parse(sessionStorage.getItem('userData'))
		if (userData) {
			dispatch(switchLoginStatusAC(true))
			dispatch(setUserId(userData.userId))
			dispatch(getMeInfo(userData.userId))
		} else {
			dispatch(switchLoginStatusAC(false))
		}
		dispatch(initializedSuccess())
	}
}



export default appReducer;