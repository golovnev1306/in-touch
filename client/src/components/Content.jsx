import React from 'react'
import {Container} from 'react-bootstrap'
import Routes from './Routes'


const Content = () => {
	return (
		<Container>
			<div className='content' style={{'marginTop': 20}}>
			<Routes/>
			</div>
		</Container>
	);
}

export default Content;