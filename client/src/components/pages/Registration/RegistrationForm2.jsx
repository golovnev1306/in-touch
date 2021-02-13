import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Form, Col, Button} from 'react-bootstrap'
import {Field, reduxForm, getFormValues} from 'redux-form'
import BSFormControl from './../../common/form-fields/BSFormControl'
import {required, length, email} from 'redux-form-validators'
import {registration, login} from '../../../redux/login-reducer'
import { EmojiDizzy } from 'react-bootstrap-icons'
import styles from './Registration.module.css'

let RegistrationForm2 = ({visible, handleSubmit}) => {
	
	let classNames = styles.step_of_registration_form
	classNames += !visible ? ' ' + styles.hidden_form : ''
	
	const blurHandler = () => {
		//todo check email
		
		/*throw new SubmissionError({
			username: 'User does not exist',
			_error: 'Login failed!'
		})*/
	}
	
	return (
		<Form onSubmit={handleSubmit} className={classNames}>
		<h4>Просим подтвердить вашу почту <EmojiDizzy color="#007bff"/></h4>
		<Form.Row className='flex-grow-1 align-items-center'>
			<Col xs={12} sm={{span:10, offset: 1}} md={{span:8, offset: 2}} lg={{span:6, offset: 3}}>
			<Form.Group controlId="formGridEmail">
				<Form.Label>Эл.почта</Form.Label>
				<Field 
					name='email' 
					component={BSFormControl} 
					type="text" 
					placeholder="Введите Вашу эл.почту" 
					validate={[
						required({msg: 'Поле с эл.почтой не может быть пустым'}), 
						email({msg: 'Введите корректную эл.почту'})
						]}
					onBlur = {blurHandler}
				/>
				<Form.Text muted>Для подтверждения личности, кстати, мы планируем сделать подтверждение по смс</Form.Text>
			</Form.Group>
			
		  </Col>
		  </Form.Row>
		</Form>
	);
}


const RegistrationForm2ReduxForm = reduxForm({
  form: 'registrationStep2'
})(RegistrationForm2)



export default RegistrationForm2ReduxForm