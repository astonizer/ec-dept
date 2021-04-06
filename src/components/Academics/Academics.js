import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import './Academics.css';

function Academics() {
	return (
		<Container>
			<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
				<Tab eventKey="1" title="Admission">
					Admission
				</Tab>
				<Tab eventKey="2" title="B.Tech. (E.C.)">
					B.Tech. (E.C.)
				</Tab>
				<Tab eventKey="3" title="M.Tech (CS/VLSI)">
					M.Tech (CS/VLSI)
				</Tab>
				<Tab eventKey="4" title="Ph. D. Electronics Engineering">
					Ph. D. Electronics Engineering
				</Tab>
			</Tabs>
		</Container>
	);
}

export default Academics;
