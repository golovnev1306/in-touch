import React from 'react'
import {Form, Col} from 'react-bootstrap'
import {Field, reduxForm} from 'redux-form'
import BSFormControl from './../../common/form-fields/BSFormControl'
import {required, email} from 'redux-form-validators'
import { EmojiDizzy } from 'react-bootstrap-icons'
import styles from './Registration.module.css'
import {compose} from "redux";
import withSlowAppear from "../../../hoc/withSlowAppear"
import checkEmailAsyncValidation from "../../../utils/checkEmailAsyncValidation";

const RegistrationForm2 = (props) => {
	const {handleSubmit} = props
	
	return (
		<Form onSubmit={handleSubmit} className={styles.step_of_registration_form}>
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
				/>
				<Form.Text muted>Для подтверждения личности, кстати, мы планируем сделать подтверждение по смс</Form.Text>
			</Form.Group>
			
		  </Col>
		  </Form.Row>
		</Form>
	);
}

export default compose(reduxForm({
	form: 'registrationStep2',
	asyncValidate: checkEmailAsyncValidation,
	asyncBlurFields: ['email']
}), withSlowAppear)(RegistrationForm2)