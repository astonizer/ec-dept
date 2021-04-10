import React from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import StaffCard from './StaffCard/StaffCard';
import './Staff.css';

function Staff() {
	const table = [
		{ name: 'ff', email: 'dd', designation: 'ff', phone: 'kk', type: 3 },
		{ name: 'ff', email: 'dd', designation: 'ff', phone: 'kk', type: 2 },
	];
	return (
		<Container>
			<Accordion className="accordion" defaultActiveKey="0">
				<Card>
					<Card.Header className="title">
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="0"
						>
							Office Staff
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<Row>
								{table.map(entry =>
									entry.type === 1 ? (
										<Col lg={4} md={6}>
											<StaffCard entry={entry} />
										</Col>
									) : (
										''
									)
								)}
							</Row>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header className="title">
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="1"
						>
							Laboratory Staff
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
							<Row>
								{table.map(entry =>
									entry.type === 2 ? (
										<Col lg={4} md={6}>
											<StaffCard entry={entry} />
										</Col>
									) : (
										''
									)
								)}
							</Row>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header className="title">
						<Accordion.Toggle
							as={Button}
							variant="link"
							eventKey="2"
						>
							Supportive Staff
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="2">
						<Card.Body>
							<Row>
								{table.map(entry =>
									entry.type === 3 ? (
										<Col lg={4} md={6}>
											<StaffCard entry={entry} />
										</Col>
									) : (
										''
									)
								)}
							</Row>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Container>
	);
}

export default Staff;
