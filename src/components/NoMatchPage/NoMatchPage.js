import React from 'react';
import { Container } from 'react-bootstrap';
import './NoMatchPage.css';

function NoMatchPage() {
	return (
		<Container align="center" className="h1 noMatchPage">
			404 Page
			<br />
			Oops, this page doesn't exist
		</Container>
	);
}

export default NoMatchPage;
