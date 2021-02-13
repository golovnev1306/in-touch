import {combineReducers, createStore, applyMiddleware} from 'redux'
import loginReducer from './login-reducer'
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	login: loginReducer,
	form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;