import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Faculty from './Faculty/Faculty';

function Notice() {
	return (
		<Container>
				<Faculty />
				<Faculty />
				<Faculty />
				<Faculty />
				<Faculty />
		</Container>
	);
}

export default Notice;
