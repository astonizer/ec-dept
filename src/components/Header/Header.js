import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
	return (
		<div className="header" id="header">
			<Navbar expand="lg" className="bg-dark">
				<Container>
					<Navbar.Brand
						href="#home"
						className="text-light m-auto topmost"
					>
						<img src={logo} className="logo" alt="" />
						<div>
							<span className="dept">
								Electronics Engineering Department
							</span>
							<br />
							<span className="college">
								Sardar Vallabhbhai National Institute of
								Technology Surat
							</span>
						</div>
					</Navbar.Brand>
				</Container>
			</Navbar>
			<Navbar expand="lg" className="bg-dark">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="m-auto">
							<LinkContainer to="/">
								<Nav.Link className="text-light">Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/contact">
								<Nav.Link className="text-light">
									Contact
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/about">
								<Nav.Link className="text-light">
									About
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
