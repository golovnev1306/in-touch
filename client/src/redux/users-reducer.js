import usersApi from '../api/usersApi'

const SET_ME = 'SET_ME'
const SET_USER_ID = 'SET_USER_ID' 

const initialState = {
	userId: null,
	userData: {}
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ME: {
			console.log({...action.userData})
			return {
				...state,
				userData: {...action.userData}
			}
		}
		case SET_USER_ID: {
			return {
				...state,
				userId: action.userId
			}
		}
		
		default: return state;
	}
}

export const setMe = userData => ({type: SET_ME, userData})
export const setUserId = userId => ({type: SET_USER_ID, userId})

export const getMeInfo = (userId) => {
	return async (dispatch) => {
		try {
			const result = await usersApi.me(userId)
			dispatch(setMe(result.data.user))
		} catch (error) {
			console.log('ошибка', error.response.data.message)
		}
	}
}

export default usersReducer;