import React from 'react'
import {Form} from 'react-bootstrap'

const BSFormControl = ({input, meta, ...rest}) => {
	
	const isValid = meta.touched && meta.valid && !meta.asyncValidating
	const isInvalid = meta.touched && meta.invalid && !meta.asyncValidating
	const isAsyncValidating = meta.asyncValidating

	return (
		<div className={'position-relative'}>
			<Form.Control {...input} {...rest} isValid={isValid} isInvalid={isInvalid}/>
			{isAsyncValidating && (<div className="spinner-grow spinner-grow-sm text-primary spinner-async-validate" role="status">
				<span className="sr-only">Loading...</span>
			</div>)}
			<Form.Control.Feedback type="invalid">
				{meta.error}
			</Form.Control.Feedback>
		</div>
	);
}

export default (BSFormControl);