import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import List from './List/List';
import './PhD.css';

function PhD() {
	const [ongoing, setOngoing] = useState(true);

	const ChangeStatus = (status) => {
		setOngoing(status);
	}

	return(
		<>
			<Container className="buttongroup">
			<Button className="button"
				variant="outline-info"
				onClick={() => ChangeStatus(true)}
			>
				Ongoing Ph.D
			</Button>

			<Button className="button"
				variant="outline-info"
				onClick={() => ChangeStatus(false)}
			>
				Completed Ph.D
			</Button>
			</Container>
			<List status={ongoing}/>
		</>
	)
}

export default PhD;
