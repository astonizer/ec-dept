import React from 'react';
import { Card } from 'react-bootstrap';
import './StaffCard.css';

function StaffCard({ entry }) {
	return (
		<Card className="staffcard">
			<Card.Img className="profile" src="" />
			<Card.Body>
				<Card.Title>{entry.name}</Card.Title>
				<Card.Text>
					<h6>{entry.designation}</h6>
					E-mail: <h6>{entry.email}</h6>
					Phone: <h6>{entry.phone}</h6>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default StaffCard;
