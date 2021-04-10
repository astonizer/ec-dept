import React from 'react';
import { Card } from 'react-bootstrap';

function NoticeCard({ body }) {
	return (
		<Card className="my-3" border="primary">
			<Card.Body className="card_body">{body}</Card.Body>
		</Card>
	);
}

export default NoticeCard;
