import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Footer.css';

function Footer() {
	return (
		<Container fluid className=" bg-dark text-light">
			<Container className="footer">
				<Row>
					<Col align="center" md="4" sm="12">
						<h3 className="font-weight-bold">SVNIT, Surat</h3>
						<h5>Electronics Engineering Department</h5>
						<br />
						<h6>
							Aimed at excellence in education, research, <br />
							innovations and ethics by stakeholders.
						</h6>
						<br />
					</Col>
					<Col align="center">
						<h4>Main</h4>
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about">
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/contact">
							<Nav.Link>Contact</Nav.Link>
						</LinkContainer>
					</Col>
					<Col align="center">
						<h4>People</h4>
						<LinkContainer to="/about">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
					</Col>
					<Col align="center">
						<h4>Academics</h4>
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
					</Col>
					<Col align="center">
						<h4>Research</h4>
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
					</Col>
				</Row>
				<br />
				<Container align="center">
					All rights reserved. Copyright © Noice Codes
				</Container>
			</Container>
		</Container>
	);
}

export default Footer;
