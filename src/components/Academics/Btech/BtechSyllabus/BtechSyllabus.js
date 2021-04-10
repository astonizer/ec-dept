import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import Btech1 from './Btech1/Btech1';
import Btech2 from './Btech2/Btech2';
import Btech3 from './Btech3/Btech3';
import Btech4 from './Btech4/Btech4';

function BtechSyllabus() {
	const path = useHistory().location.pathname;
	const tab = path.split('/')[4];
	return (
		<Container className="my-5">
			<Nav justify variant="tabs" defaultActiveKey={path}>
				<Nav.Item>
					<Nav.Link
						as={Link}
						eventKey="link-0"
						to="/academics/btech/syllabus/1"
					>
						1st Year
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						as={Link}
						eventKey="link-1"
						to="/academics/btech/syllabus/2"
					>
						2nd Year
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						as={Link}
						eventKey="link-2"
						to="/academics/btech/syllabus/3"
					>
						3rd Year
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						as={Link}
						eventKey="disabled"
						to="/academics/btech/syllabus/4"
					>
						4th Year
					</Nav.Link>
				</Nav.Item>
			</Nav>
			{tab === '1' ? (
				<Btech1 />
			) : tab === '2' ? (
				<Btech2 />
			) : tab === '3' ? (
				<Btech3 />
			) : (
				<Btech4 />
			)}
		</Container>
	);
}

export default BtechSyllabus;
