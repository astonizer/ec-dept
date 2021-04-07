import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Admissions.css';

function Admissions() {
	return (
		<Container className="my-5">
			<Card className="my-3">
				<Card.Body className="admissions_card">
					<span className="font-weight-bold">
						Undergraduate - B.Tech in Electronics & Communication
						Engineering
					</span>
					<span>
						Through JoSSA (Centralised Admission System)
						<br />
						<span className="font-weight-bold">Prerequisites:</span>
						<br />
						10+2 in Science Stream + JEE ( MAINS )
					</span>
				</Card.Body>
			</Card>
			<Card className="my-3">
				<Card.Body className="admissions_card">
					<span className="font-weight-bold">
						Postgraduate - M.Tech Specialization in CS/VLSI
					</span>
					<span>
						Through CCMT
						<br />
						<span className="font-weight-bold">Prerequisites:</span>
						<br />
						BE / BTech + GATE in Electronics Engineering
					</span>
				</Card.Body>
			</Card>
			<Card className="my-3">
				<Card.Body className="admissions_card">
					<span className="font-weight-bold">
						PhD in Electronics Engineering
					</span>
					<span>
						Through Competitive test + Interview
						<br />
						<span className="font-weight-bold">Prerequisites:</span>
						<br />
						ME / MTech in Electronics Engineering
					</span>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default Admissions;
