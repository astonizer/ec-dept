import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
	return (
		<div className="header" id="header">
			<Navbar expand="lg" className="bg-dark">
				<Container>
					<Navbar.Brand
						href="#"
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
			<Navbar expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="m-auto">
							<LinkContainer to="/">
								<Nav.Link className="text-light">Home</Nav.Link>
							</LinkContainer>
							<NavDropdown
								title="Academics"
								id="basic-nav-dropdown"
								className="text-light"
							>
								<LinkContainer to="/academics/admissions">
									<NavDropdown.Item href="#">
										Admission
									</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/academics/btech">
									<NavDropdown.Item href="#">
										B.Tech. (E.C.)
									</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/academics/mtech">
									<NavDropdown.Item href="#">
										M.Tech (CS/VLSI)
									</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/academics/phd">
									<NavDropdown.Item href="#">
										Ph. D. Electronics Engineering
									</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
							<NavDropdown
								title="Research"
								id="basic-nav-dropdown"
								className="text-light"
							>
								<LinkContainer to="/research/sponsored">
									<NavDropdown.Item href="#">
										Sponsored Research Projects
									</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/research/facilities">
									<NavDropdown.Item href="#">
										Research Facilities
									</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/research/pgdissertation">
									<NavDropdown.Item href="#">
										PG Dissertation
									</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/research/pgseminar">	
									<NavDropdown.Item href="#">
										PG Seminar
									</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/research/ugproject">
									<NavDropdown.Item href="#">
										UG Project
									</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/research/upseminar">
									<NavDropdown.Item href="#">
										UG Seminar
									</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
							<NavDropdown
								title="People"
								id="basic-nav-dropdown"
								className="text-light"
							>
								<LinkContainer to="/people/faculty">
									<NavDropdown.Item href="#">
										Faculty
									</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/people/staff">
									<NavDropdown.Item href="#">
										Staff
									</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/people/phd">
									<NavDropdown.Item href="#">
										Ph. D. Students
									</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to="/people/mtech">
									<NavDropdown.Item href="#">
										M. Tech. Students
									</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
