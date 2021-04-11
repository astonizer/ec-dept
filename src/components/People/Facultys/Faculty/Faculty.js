import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './Faculty.css';

function Faculty({ entry, isHod }) {
	return (
		<Card className="facultycard">
			{isHod && (
				<Card.Header className="bg-dark text-light card_title">
					Current Head Of Department
				</Card.Header>
			)}
			<Row>
				<Col md={3}>
					<Card.Img className="profile" src="" />
				</Col>
				<Col md={5}>
					<Card.Body>
						<Card.Text>
							<h4>{entry.name}</h4>
							<h6>{entry.qualification}</h6>
							<h6>{entry.designation}</h6>
							<h6>{entry.mobile}</h6>
							<h6>{entry.email}</h6>
						</Card.Text>
					</Card.Body>
				</Col>
				<Col md={4}>
					<Card.Body>
						<h6>Teaching:</h6>
						{entry.teaching}
						<h6>Area of Research:</h6>
						{entry.research}
					</Card.Body>
				</Col>
			</Row>
		</Card>
	);
}

export default Faculty;
