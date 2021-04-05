import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import EventCard from './EventCard/EventCard';

function Events() {
	const [events, setEvents] = useState([
		'Sardar Vallabhbhai National Institute of Technology Surat, is a public technical university established by the Parliament of India in 1961. It is one of 31 National Institutes of Technology in India recognized by the Government of India as an Institute of National Importance.',
		'Sardar Vallabhbhai National Institute of Technology Surat, is a public technical university established by the Parliament of India in 1961. It is one of 31 National Institutes of Technology in India recognized by the Government of India as an Institute of National Importance.',
	]);
	return (
		<Card>
			<Card.Header className="bg-dark text-light card_title">
				Recent Events
			</Card.Header>
			<Card.Body>
				{events.map((event, id) => (
					<EventCard key={id} body={event} />
				))}
			</Card.Body>
		</Card>
	);
}

export default Events;
