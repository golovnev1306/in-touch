import React from 'react'
import {Form, Col} from 'react-bootstrap'
import {Field, reduxForm} from 'redux-form'
import BSFormControl from './../../common/form-fields/BSFormControl'
import {required} from 'redux-form-validators'
import { EmojiLaughing } from 'react-bootstrap-icons'
import styles from './Registration.module.css'
import {compose} from "redux";
import withSlowAppear from "../../../hoc/withSlowAppear";

const RegistrationForm1 = ({handleSubmit}) => {

	return (
		<Form onSubmit={handleSubmit} className={styles.step_of_registration_form}>
			<h4>Представьтесь, пожалуйста <EmojiLaughing color="#007bff"/></h4>
			<Form.Row className='flex-grow-1 align-items-center'>
			<Col xs={12} sm={{span:10, offset: 1}} md={{span:8, offset: 2}} lg={{span:6, offset: 3}}>
			<Form.Group controlId="formGridFirstName">
				<Form.Label>Имя</Form.Label>
				<Field 
					name='first_name' 
					component={BSFormControl} 
					type="text" 
					placeholder="Введите Ваше имя" 
					validate={[required({msg: 'Поле с именем не может быть пустым'})]}
				/>
			</Form.Group>
			<Form.Group controlId="formGridLastName">
				<Form.Label>Фамилия</Form.Label>
				<Field 
					name='last_name' 
					component={BSFormControl} 
					type="text" 
					placeholder="Введите Вашу фамилию" 
					validate={[required({msg: 'Поле с фамилией не может быть пустым'})]}
				/>
			</Form.Group>
			
		  </Col>
		  
		  </Form.Row>
			<button type='submit' hidden></button>
		</Form>
	);
}

export default compose(reduxForm({
	form: 'registrationStep1'
}), withSlowAppear)(RegistrationForm1)