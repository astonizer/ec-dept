import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './Faculty.css';

function Faculty({ body }) {
  const hod = false;
	return (
    <Card className="facultycard">
      {
        hod &&  <Card.Header className="bg-dark text-light card_title">
                  Current Head Of Department
                </Card.Header>
      }
      <Row>
        <Col md={3}>
          <Card.Img className="profile" src="" />
        </Col>
        <Col md={5}>
          <Card.Body >
            <Card.Text>
              <h4>Prof. A. H. Lalluwadia</h4>
              <h6>M. Tech.</h6>
              <h6>Associat Professor</h6>              
              <h6>Mobile: +91 9879221651</h6>
              <h6>Office Phone: (O)1740</h6>
              <h6>E-mail: ahl[at]eced[dot]svnit[dot]ac[dot]in</h6>
              <h6><a href="#">Personal Webpage</a></h6>
            </Card.Text>
          </Card.Body>
        </Col>        
        <Col md={4}>
          <Card.Body>
            <h6>Teaching:</h6>
            Telematics RF & Microwave Engineering
            <h6>Area of Research:</h6>
            RF & Microwave Engineering Image Processing
          </Card.Body>
        </Col>
      </Row>
    </Card>
	);
}

export default Faculty;
