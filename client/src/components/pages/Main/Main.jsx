import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import {Row, Col, Image, Figure, Accordion, Card, Button, ProgressBar} from 'react-bootstrap'
import profileImage from '../../../images/profile-image.jpg'
import styles from './Main.module.css'

const Main = ({userData}) => {

	console.log(userData)
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
					<h3>{userData.first_name} {userData.last_name}</h3>
					<div className={'text-muted'}>Я лучше всех</div>
					<Accordion className={styles.info_about_me}>
					  <Card>
						<Card.Header>
						  <Accordion.Toggle className={'shadow-none text-decoration-none'} as={Button} variant="link" eventKey="0">
							Информация о вас
						  </Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
						  <Card.Body>
							<Row>
								<Col>Пол</Col>
								<Col>Мужской</Col>
							</Row>
							<hr/>
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
		userData: state.users.userData
	}
}

export default connect(mapStateToProps)(Main)