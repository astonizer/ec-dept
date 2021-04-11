import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import List from './List/List';

function PGdissertation() {
	return (
		<Container>
    <Tabs defaultActiveKey="16">
      <Tab eventKey="16" title="2016-2017">
        <List categories={"2016-2017"} />
      </Tab>
      <Tab eventKey="17" title="2017-2018">
        <List categories={"2017-2018"} />
      </Tab>
      <Tab eventKey="18" title="2018-2019">
        <List categories={"2018-2019"} />
      </Tab>
      <Tab eventKey="19" title="2019-2020">
        <List categories={"2019-2020"} />
      </Tab>
    </Tabs>
		</Container>
	);
}

export default PGdissertation;
