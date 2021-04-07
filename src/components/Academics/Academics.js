import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Academics.css';
import Admissions from './Admisssions/Admissions';
import Btech from './Btech/Btech';
import Mtech from './Mtech/Mtech';
import Phd from './Phd/Phd';

function Academics() {
	const path = useHistory().location;
	const tab = path.pathname.split('/')[2];
	return (
		<Container className="my-5">
			<Nav justify variant="tabs" defaultActiveKey={path}>
				<Nav.Item>
					<Nav.Link
						as={Link}
						eventKey="link-0"
						to="/academics/admissions"
					>
						Admissions
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} eventKey="link-1" to="/academics/btech">
						B. Tech.
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} eventKey="link-2" to="/academics/mtech">
						M. Tech.
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} eventKey="disabled" to="/academics/phd">
						Ph. D.
					</Nav.Link>
				</Nav.Item>
			</Nav>
			{tab === 'admissions' ? (
				<Admissions />
			) : tab === 'btech' ? (
				<Btech />
			) : tab === 'mtech' ? (
				<Mtech />
			) : (
				<Phd />
			)}
		</Container>
	);
}

export default Academics;
