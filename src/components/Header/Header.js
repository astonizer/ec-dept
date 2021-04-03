import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
	return (
		<Navbar bg="light" expand="lg" id="header">
			<Container>
				<Navbar.Brand href="#home">Electronics Department</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/contact">
							<Nav.Link>Contact</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about">
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
