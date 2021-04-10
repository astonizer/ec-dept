import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import Mtech1 from './Mtech1/MTech1';
import Mtech2 from './MTech2/MTech2';
import Mtech3 from './MTech3/MTech3';
import Mtech4 from './MTech4/MTech4';

function MtechSyllabus() {
	const path = useHistory().location.pathname;
	const tab = path.split('/')[4];
	return (
		<Container className="my-5">
			<Nav justify variant="tabs" defaultActiveKey={path}>
				<Nav.Item>
					<Nav.Link
						as={Link}
						eventKey="link-0"
						to="/academics/mtech/syllabus/1"
					>
						1st Year Communication Systems
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						as={Link}
						eventKey="link-1"
						to="/academics/mtech/syllabus/2"
					>
						2nd Year Communication Systems
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						as={Link}
						eventKey="link-2"
						to="/academics/mtech/syllabus/3"
					>
						1st Year VLSI & Embedded Systems
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						as={Link}
						eventKey="disabled"
						to="/academics/mtech/syllabus/4"
					>
						2nd Year VLSI & Embedded Systems
					</Nav.Link>
				</Nav.Item>
			</Nav>
			{tab === '1' ? (
				<Mtech1 />
            ) : (
                    <Mtech2 />
            )}
		</Container>
	);
}

export default MtechSyllabus;