import React from 'react';
import { Card } from 'react-bootstrap';

function EventCard({ body }) {
	return (
		<Card className="my-3" border="success">
			<Card.Body className="card_body">{body}</Card.Body>
		</Card>
	);
}

export default EventCard;
