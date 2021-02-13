import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap';
import {switchLoginStatusAC} from './../../redux/login-reducer';
import {connect} from 'react-redux';

const Header = ({switchLoginStatus, isLogin}) => {
	return (
		<Navbar bg="primary" variant="dark">
			<Container>
				<Navbar.Brand>In touch</Navbar.Brand>
				<Nav className="mr-auto">
				{ isLogin ? <Nav.Link activeClassName='active' as={NavLink} to="/">Мой профиль</Nav.Link> : 
				<Nav.Link activeClassName='active' as={NavLink} to="/login">Логин</Nav.Link> }
				  
				</Nav>
				<Form inline>
				  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
				  <Button variant="outline-light"  className="mr-sm-2">Search</Button>
				</Form>
			</Container>
		</Navbar>
	);
}

const mapStateToProps = (state) => {
	return {
		isLogin: state.login.isLogin
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		switchLoginStatus: (isLogin) => {
			dispatch(switchLoginStatusAC(isLogin))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);