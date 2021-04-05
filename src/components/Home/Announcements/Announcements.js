import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import './Announcements.css';
import Events from './Events/Events';
import Notice from './Notice/Notice';

function Announcements() {
	return (
		<Container className="my-5">
			<CardDeck>
				<Events />
				<Notice />
			</CardDeck>
		</Container>
	);
}

export default Announcements;
