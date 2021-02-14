import React from 'react'
import {Form, Col} from 'react-bootstrap'
import {Field, reduxForm} from 'redux-form'
import BSFormControl from './../../common/form-fields/BSFormControl'
import {required, length} from 'redux-form-validators'
import { EmojiWink } from 'react-bootstrap-icons'
import styles from './Registration.module.css'
import {compose} from "redux";
import withSlowAppear from "../../../hoc/withSlowAppear";

let RegistrationForm3 = () => {

	return (
		<Form className={styles.step_of_registration_form}>
		<h4>Придумайте пароль для входа <EmojiWink color='#007bff'/></h4>
		<Form.Row className='flex-grow-1 align-items-center'>
			<Col xs={12} sm={{span:10, offset: 1}} md={{span:8, offset: 2}} lg={{span:6, offset: 3}}>
			<Form.Group controlId="formGridPassword">
				<Form.Label>Пароль</Form.Label>
				<Field
					name='password' 
					component={BSFormControl} 
					type="password"
					placeholder="Пароль" 
					validate={
						[
							required({msg: 'Пароль не может быть пустым'}),
							length({min: 6, msg: 'Пароль должен содержать не менее 6 символов'})
						]
					}
				/>
				<Form.Text muted>
					Минимальная длина пароля 6 символов<br/>
					Помните, что простой пароль легко запомнить и угадать
				</Form.Text>
			</Form.Group>
		  </Col>
		  </Form.Row>
		</Form>
	);
}

export default compose(reduxForm({
	form: 'registrationStep3'
}),withSlowAppear)(RegistrationForm3)