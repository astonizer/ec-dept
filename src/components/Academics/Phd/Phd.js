import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Phd.css';

function Phd() {
	return (
		<Container>
			<Card className="my-3">
				<Card.Header align="center" className="bg-info text-light">
					Ph. D. Electronics Engineering
				</Card.Header>
				<Card.Body>
					<Card.Text className="phd_card">
						The doctoral programme in the department trains the
						candidates to pursue original research ideas and add to
						the current state-of-the-art and prepares them for
						academic as well as research and development works. The
						admissions to the Ph.D. programmes are through written
						test/interviews conducted in the department.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card className="my-3">
				<Card.Header align="center" className="bg-info text-light">
					Courses
				</Card.Header>
				<Card.Body>
					<Card.Text className="phd_card">
						<Button variant="light">
							Grade NPTEL-SWAYAM Courses
						</Button>
						<Button variant="light"> NPTEL Gradesheet</Button>
						<Button variant="light">PhD Tutorial Gradesheet</Button>
					</Card.Text>
				</Card.Body>
			</Card>
			<Card className="my-3">
				<Card.Header align="center" className="bg-info text-light">
					Comprehensive
				</Card.Header>
				<Card.Body>
					<Card.Text className="phd_card">
						<Button variant="light">
							Comprehensive Examination Syllabus
						</Button>
						<Button variant="light"> 41st IAAC</Button>
						<Button variant="light">
							44th Senate Minutes Ph. D. Regulations
						</Button>
					</Card.Text>
				</Card.Body>
			</Card>
			<Card className="my-3">
				<Card.Header align="center" className="bg-info text-light">
					Reports
				</Card.Header>
				<Card.Body>
					<Card.Text className="phd_card">
						<Button variant="light" className="mx-2">
							Research Progress Seminar Report
						</Button>
						<Button variant="light" className="mx-2">
							Credit Seminar Evolution
						</Button>
						<Button variant="light" className="mx-2">
							Pre Synopsis Seminar Form
						</Button>
						<Button variant="light" className="mx-2">
							Synopsis_Certificate
						</Button>
						<Button variant="light" className="mx-2">
							Ph. D. Viva-Voce Report
						</Button>
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default Phd;
