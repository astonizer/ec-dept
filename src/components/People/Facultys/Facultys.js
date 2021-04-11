import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Faculty from './Faculty/Faculty';

function Notice() {
	// remove this dummy data after firebase integration
	const table = [
		{
			name: 'Abc',
			qualification: 'Mtech',
			designation: 'Peon',
			email: 'a@b.c',
			mobile: '01',
			teaching: 'Teaching',
			research: 'neural networks',
		},
	];
	return (
		<Container>
			{table.map((entry, id) => {
				<Faculty entry={entry} isHods={id === 0} />;
			})}
		</Container>
	);
}

export default Notice;
