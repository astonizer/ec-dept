import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

function Mtech() {
	return (
		<Container>
			<Card className="my-3">
				<Card.Header align="center" className="bg-info text-light">
					M.Tech. (CS/VLSI) (Graduate Masters Programme)
				</Card.Header>
				<Card.Body>
					<Card.Text>
						One has to earn minimum 60 credits over 2 years of
						course (Including dissertation work at industry/research
						institute) Results are awarded on scale of 10.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card className="my-3">
				<Card.Header align="center" className="bg-info text-light">
					M.Tech. in COMMUNICATION SYSTEMS Course Curriculum
				</Card.Header>
				<Card.Body align="center">
					<Button variant="outline-info" className="mx-2">
						3rd Year
					</Button>
					<Button variant="outline-info" className="mx-2">
						4th Year
					</Button>
				</Card.Body>
			</Card>
			<Card className="my-3">
				<Card.Header align="center" className="bg-info text-light">
					M.Tech. Electronics in VLSI & EMBEDDED SYSTEMS Course
					Curriculum
				</Card.Header>
				<Card.Body align="center">
					<Button variant="outline-info" className="mx-2">
						3rd Year
					</Button>
					<Button variant="outline-info" className="mx-2">
						4th Year
					</Button>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default Mtech;
