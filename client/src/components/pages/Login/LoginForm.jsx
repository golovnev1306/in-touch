import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Form, Col, Button} from 'react-bootstrap'
import {Field, reduxForm} from 'redux-form'
import BSFormControl from './../../common/form-fields/BSFormControl'
import {required, length} from 'redux-form-validators'
import {registration, login} from '../../../redux/login-reducer'

let LoginForm = (props) => {
	
	const {isAuthentificated, handleSubmit, registration, login} = props
	
	return (
		<Form>
		  <Form.Row>
			<Col  xs={12} sm={{span:10, offset: 1}} md={{span:8, offset: 2}} lg={{span:6, offset: 3}}>
			<Form.Group controlId="formGridLogin">
				<Form.Label>Логин</Form.Label>
				<Field 
					name='login' 
					component={BSFormControl} 
					type="text" 
					placeholder="Введите логин" 
					validate={[required({msg: 'Поле логина не может быть пустым'})]}
				/>
			</Form.Group>

			<Form.Group controlId="formGridPassword">
				<Form.Label>Пароль</Form.Label>
				<Field
					name='password' 
					component={BSFormControl} 
					type="password"
					placeholder="Пароль" 
					validate={
						length({min: 6, msg: 'Пароль должен содержать не менее 6 символов'})
					}
				/>
			</Form.Group>
			</Col>
		  </Form.Row>
		  <Button variant="primary" onClick={handleSubmit(login)}>
			Войти
		  </Button>
		</Form>
	);
}

const mapStateToProps = (state) => {
	return {
		isAuthentificated: state.login.isAuthentificated
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		registration: (values) => dispatch(registration(values.login, values.password)),
		login: (values) => {
			console.log(values)
			dispatch(login(values.login, values.password))
			}
	}
}



const LoginFormReduxForm = reduxForm({
  form: 'login'
})(LoginForm)



export default connect(mapStateToProps, mapDispatchToProps)(LoginFormReduxForm)