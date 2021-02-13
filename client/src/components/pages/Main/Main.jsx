import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import {Row, Col, Image, Figure, Accordion, Card, Button, ProgressBar} from 'react-bootstrap'
import profileImage from '../../../images/profile-image.jpg'
import styles from './Main.module.css'

const Main = ({isLogin}) => {

	return (
		<div>
			<Row>
				<Col className='justify-content-center' lg={'auto'}>
					<div className={styles.profile_photo_wrap}> 
						<Image className={`${styles.profile_photo}`} 
							   src={profileImage}
							   rounded
						/>
						
					</div>
					<ProgressBar animated className={styles.popularity_progress} now={60} />
						<Button className={`${styles.profile_photo_btn} w-sm-100 d-flex btn-block`}>Изменить профиль</Button>
				</Col>
				<Col className={'w-sm-100'}>
					<h3>Константин Головнев</h3>
					<div className={'text-muted'}>Я лучше всех</div>
					<Accordion className={styles.info_about_me} defaultActiveKey="0">
					  <Card>
						<Card.Header>
						  <Accordion.Toggle className={'shadow-none text-decoration-none'} as={Button} variant="link" eventKey="0">
							Информация о вас
						  </Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
						  <Card.Body>
							<Row>
								<Col>Место жительства</Col>
								<Col>Чунский</Col>
							</Row>
							 <hr/>
							<Row>
								<Col>Отношение к курению</Col>
								<Col>Негативное</Col>
							</Row>
							<hr/>
							<Row>
								<Col>О вас</Col>
								<Col>Люблю спать!</Col>
							</Row>
							<hr/>
							<Row>
								<Col>Отношение к курению</Col>
								<Col>Негативное</Col>
							</Row>
							<hr/>
							<Row>
								<Col>Отношение к курению</Col>
								<Col>Негативное</Col>
							</Row>
							<hr/>
							<Row>
								<Col>Отношение к курению</Col>
								<Col>Негативное</Col>
							</Row>
							<hr/>
							<Row>
								<Col>Отношение к курению</Col>
								<Col>Негативное</Col>
							</Row>
							<hr/>
							<Row>
								<Col>Отношение к курению</Col>
								<Col>Негативное</Col>
							</Row>
						  </Card.Body>
						</Accordion.Collapse>
					  </Card>
					</Accordion>
				</Col>
			</Row>
			
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		isLogin: state.login.isLogin
	}
}

export default connect(mapStateToProps, null)(Main)