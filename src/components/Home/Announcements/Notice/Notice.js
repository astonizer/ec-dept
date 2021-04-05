import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import NoticeCard from './NoticeCard.js/NoticeCard';

function Notice() {
	const [notices, setNotices] = useState([
		'Sardar Vallabhbhai National Institute of Technology Surat, is a public technical university established by the Parliament of India in 1961. It is one of 31 National Institutes of Technology in India recognized by the Government of India as an Institute of National Importance.',
	]);
	return (
		<Card>
			<Card.Header className="bg-dark text-light card_title">
				Student Notice
			</Card.Header>
			<Card.Body>
				{notices.map((notice, id) => (
					<NoticeCard key={id} body={notice} />
				))}
			</Card.Body>
		</Card>
	);
}

export default Notice;
