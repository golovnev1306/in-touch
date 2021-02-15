import {combineReducers, createStore, applyMiddleware} from 'redux'
import loginReducer from './login-reducer'
import usersReducer from './users-reducer'
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk'
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
	app: appReducer,
	login: loginReducer,
	users: usersReducer,
	form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;