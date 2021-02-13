import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Form, Col, Button} from 'react-bootstrap'
import {Field, reduxForm} from 'redux-form'
import BSFormControl from './../../common/form-fields/BSFormControl'
import {required, length} from 'redux-form-validators'
import {registration, login} from '../../../redux/login-reducer'
import { EmojiWink } from 'react-bootstrap-icons'
import styles from './Registration.module.css'

let RegistrationForm3 = ({visible}) => {

	
	let classNames = styles.step_of_registration_form
	classNames += !visible ? ' ' + styles.hidden_form : ''
	
	return (
		<Form className={classNames}>
		<h4>Придумайте логин/пароль для входа в аккаунт <EmojiWink color='#007bff'/></h4>
		<Form.Row className='flex-grow-1 align-items-center'>
			<Col xs={12} sm={{span:10, offset: 1}} md={{span:8, offset: 2}} lg={{span:6, offset: 3}}>
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
		</Form>
	);
}


const RegistrationForm3ReduxForm = reduxForm({
  form: 'registrationStep3'
})(RegistrationForm3)



export default RegistrationForm3ReduxForm