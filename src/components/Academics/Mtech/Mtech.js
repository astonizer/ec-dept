import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function Mtech() {
	return (
		<Container>
			<Card className="my-3">
				<Card.Header align="center" className="bg-info text-light">
					M.Tech. (CS/VLSI) (Graduate Masters Programme)
				</Card.Header>
				<Card.Body>
					<Card.Text>
						One has to earn minimum 60 credits over 2 years of
						course (Including dissertation work at industry/research
						institute) Results are awarded on scale of 10.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card className="my-3">
				<Card.Header align="center" className="bg-info text-light">
					M.Tech. in <b>COMMUNICATION SYSTEMS</b> Course Curriculum
				</Card.Header>
				<Card.Body>
					<Card className="my-3">
						<Card.Body>
							<Card.Title align="center">
								Curriculum
							</Card.Title>
							<Card.Body align="center">
								<Link
									to="/academics/mtech/syllabus/1"
									className="text-info"
								>
									<Button
										variant="outline-info"
										className="mx-2"
									>
										1st Year
									</Button>
								</Link>
								<Link
									to="/academics/mtech/syllabus/2"
									className="text-info"
								>
									<Button
										variant="outline-info"
										className="mx-2"
									>
										2nd Year
									</Button>
								</Link>
							</Card.Body>
						</Card.Body>
					</Card>
				</Card.Body>
			</Card>
			<Card className="my-3">
				<Card.Header align="center" className="bg-info text-light">
					M.Tech. Electronics in <b>VLSI & EMBEDDED SYSTEMS</b> Course Curriculum
				</Card.Header>
				<Card.Body>
					<Card className="my-3">
						<Card.Body>
							<Card.Title align="center">
								Curriculum
							</Card.Title>
							<Card.Body align="center">
								<Link
									to="/academics/mtech/syllabus/3"
									className="text-info"
								>
									<Button
										variant="outline-info"
										className="mx-2"
									>
										1st Year
									</Button>
								</Link>
								<Link
									to="/academics/mtech/syllabus/4"
									className="text-info"
								>
									<Button
										variant="outline-info"
										className="mx-2"
									>
										2nd Year
									</Button>
								</Link>
							</Card.Body>
						</Card.Body>
					</Card>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default Mtech;
