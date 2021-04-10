import React from 'react';
import { Card } from 'react-bootstrap';
import './StaffCard.css'

function StaffCard() {
	return (
    <Card className="staffcard">
      <Card.Img className="profile" src="" />
      <Card.Body>
        <Card.Title>Mr. Praful Patel</Card.Title>
        <Card.Text>
          <h6>Lab Assistant</h6>
          E-mail: <h6>praful.patel.pp88@gmail.com </h6>
          Phone: <h6>9574003375</h6>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default StaffCard;
