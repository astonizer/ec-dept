import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Vision.css';

function Vision() {
	return (
		<Container>
			<Card className="text-center my-5">
				<Card.Header className="card_title bg-dark text-light">
					Department Mission
				</Card.Header>
				<Card.Body>
					<Card.Text>
						The mission of the Electronics Engineering Department is
						to contribute to society and industry through excellence
						in education, research, innovations and ethics by
						stakeholders.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card className="text-center my-5">
				<Card.Header className="card_title bg-dark text-light">
					Department Vision
				</Card.Header>
				<Card.Body>
					<Card.Text>
						The vision of the Electronics Engineering Department is
						to Aim to achieve quality in education and research to
						create leading Electronics engineers, researchers and
						entrepreneurs.
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default Vision;
