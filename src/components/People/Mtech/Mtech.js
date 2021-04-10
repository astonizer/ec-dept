import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Container, Tabs, Tab } from 'react-bootstrap';
import List from './List/List';
import './Mtech.css';

function Mtech() {

  const m1c = 'M. Tech. – I (COMMUNICATION. SYSTEMS)';
  const m2c = 'M. Tech. – II (COMMUNICATION. SYSTEMS)';
  const m1v = 'M. Tech. – I (VLSI & EMBEDDED SYSTEMS)';
  const m2v = 'M. Tech. – II (VLSI & EMBEDDED SYSTEMS)';

	return(
    <Container>
    <Tabs defaultActiveKey="m1c">
      <Tab eventKey="m1c" title="M. Tech. – I (COMM. SYS.)">
        <List categories={m1c} />
      </Tab>
      <Tab eventKey="m2c" title="M. Tech. – II (COMM. SYS.)">
        <List categories={m2c} />
      </Tab>
      <Tab eventKey="m1v" title="M. Tech. – I (V&E SYS.)">
        <List categories={m1v} />
      </Tab>
      <Tab eventKey="m2v" title="M. Tech. – I (V&E SYS.)">
        <List categories={m2v} />
      </Tab>
    </Tabs>
		</Container>
  )
}

export default Mtech;
