import React from 'react'
import {connect} from 'react-redux'
import {Redirect, NavLink} from 'react-router-dom'
import {Form, Col, Button} from 'react-bootstrap'
import LoginForm from './LoginForm'

const Login = ({isLogin}) => {
	
	return (
		<div>
		{isLogin &&
			(<Redirect to='/'/>)}
			<LoginForm />
			<NavLink to={'/registration'}>Нет аккаунта? Регистрация</NavLink>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isLogin: state.login.isLogin
	}
}

export default connect(mapStateToProps, null)(Login)