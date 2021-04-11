import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import List from './List/List';
import './Sponsored.css';

function Sponsored() {

	const [ongoing, setOngoing] = useState(true);

	const ChangeStatus = (status) => {
		setOngoing(status);
	}

	return (
		<>
			<Container className="buttongroup">
			<Button className="button"
				variant="outline-info"
				onClick={() => ChangeStatus(true)}
			>
				On Going
			</Button>

			<Button className="button"
				variant="outline-info"
				onClick={() => ChangeStatus(false)}
			>
				Completed
			</Button>
			</Container>
			<List status={ongoing}/>
		</>
	);
}

export default Sponsored;
