import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getIsAutentificated} from "../../selectors/selectors";
import {logout} from "../../redux/login-reducer";

const Header = ({isAutentificated, logout}) => {
	return (
		<Navbar bg="primary" variant="dark">
			<Container>
				<Navbar.Brand>In touch</Navbar.Brand>
				<Nav className="mr-auto">
				{ isAutentificated ? (
					<>
					<Nav.Link activeClassName='active' as={NavLink} to="/">Мой профиль</Nav.Link>
					<Nav.Link onClick={logout} as={NavLink} to="/login">Выход</Nav.Link></>
					) :
				<Nav.Link activeClassName='active' as={NavLink} to="/login">Логин</Nav.Link> }
				  
				</Nav>
				{ isAutentificated && (
				<Form inline>
				  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
				  <Button variant="outline-light"  className="mr-sm-2">Search</Button>
				</Form>)}
			</Container>
		</Navbar>
	);
}

const mapStateToProps = (state) => {
	return {
		isAutentificated: getIsAutentificated(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(logout())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);