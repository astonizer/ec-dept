import React from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import StaffCard from './StaffCard/StaffCard';
import './Staff.css';


function Staff() {
	return(
    <Container>
      <Accordion className="accordion" defaultActiveKey="0">
        <Card>
          <Card.Header className="title">
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Office Staff
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Row>
                <Col lg={4} md={6}>
                  <StaffCard />
                </Col>
                <Col lg={4} md={6}>
                  <StaffCard />
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="title">
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Laboratory Staff
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Row>
                <Col lg={4} md={6}>
                  <StaffCard />
                </Col>
                <Col lg={4} md={6}>
                  <StaffCard />
                </Col>
                <Col lg={4} md={6}>
                  <StaffCard />
                </Col>
                <Col lg={4} md={6}>
                  <StaffCard />
                </Col>
                <Col lg={4} md={6}>
                  <StaffCard />
                </Col>
                <Col lg={4} md={6}>
                  <StaffCard />
                </Col>
                <Col lg={4} md={6}>
                  <StaffCard />
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="title">
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Suppotive Staff
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Row>
                <Col lg={4} md={6}>
                  <StaffCard />
                </Col>
                <Col lg={4} md={6}>
                  <StaffCard />
                </Col>
                <Col lg={4} md={6}>
                  <StaffCard />
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>      
    </Container>
  )
}

export default Staff;
