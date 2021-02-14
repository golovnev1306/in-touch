import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Button, Fade} from 'react-bootstrap'
import RegistrationForm1 from './RegistrationForm1'
import RegistrationForm2 from './RegistrationForm2'
import RegistrationForm3 from './RegistrationForm3'
import styles from './Registration.module.css'
import {CaretLeft} from 'react-bootstrap-icons'
import {CaretRight} from 'react-bootstrap-icons'
import {isValid, getFormValues} from 'redux-form'
import {registration} from '../../../redux/login-reducer'
import {NavLink} from "react-router-dom";

const Registration = ({isValidSteps, formStep1Values1, formStep1Values2, formStep1Values3, registration}) => {
	const [step, setStep] = useState(1)

	const registrationSubmit = () => {
			const values = Object.assign(formStep1Values1, formStep1Values2, formStep1Values3)
			registration(values)
	}
	
	const registrationSubmitStep1and2 = () => {
		setStep(step + 1)
	}
	
	return (
		<div>
			<h4 className={styles.page_title}>Страница регистрации</h4>


			<RegistrationForm1 onSubmit={registrationSubmitStep1and2} invisible={!(step === 1)}/>

			<RegistrationForm2 onSubmit={registrationSubmitStep1and2} invisible={!(step === 2)}/>

			<RegistrationForm3 invisible={!(step === 3)}/>

			{ step > 1 && (<Button className={styles.registration_steps_btn} variant="primary" onClick={() => setStep(step - 1)}>
				<CaretLeft/> Назад
			</Button>)}
			{ step <= 3 && 
				(<Button 
					disabled={!isValidSteps[step-1]} 
					className={styles.registration_steps_btn}
					variant="primary" 
					onClick={() => (step === 3) ? registrationSubmit() : setStep(step + 1)}
				>
				{(step !== 3) ? 'Далее ' : 'Готово '}<CaretRight/>
				</Button>)
			}
			<div className={'mt-2'}>
				<NavLink to={'/login'}>Зарегистрированы? Вам сюда</NavLink>
			</div>
		</div>
		
	);
}


const mapStateToProps = (state) => {
	return {
		isValidSteps: [
			isValid('registrationStep1')(state),
			isValid('registrationStep2')(state),
			isValid('registrationStep3')(state),
		],
		'formStep1Values1': getFormValues('registrationStep1')(state),
		'formStep1Values2': getFormValues('registrationStep2')(state),
		'formStep1Values3': getFormValues('registrationStep3')(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		registration: values => dispatch(registration(values))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)