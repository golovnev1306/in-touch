import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {Form, Col, Button} from 'react-bootstrap';

const BSFormControl = ({input, meta, ...rest}) => {
	
	const isValid = meta.touched && meta.valid;
	const isInvalid = meta.touched && meta.invalid;
	
	return (
		<>
			<Form.Control {...input} {...rest} isValid={isValid} isInvalid={isInvalid}/>
			<Form.Control.Feedback type="invalid">
				{meta.error}
			</Form.Control.Feedback>
		</>
	);
}

export default (BSFormControl);