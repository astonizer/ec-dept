import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './List.css';


function List({ categories }) {
	return(
		<Container>
			<h4 className="title"> {categories} </h4>
			<Table striped bordered hover className="table">
				<thead>
					<tr>
						<th>Sr. No.</th>
						<th>Admission No</th>
						<th>Student’s Name</th>
						<th>Email Address</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	)
}

export default List;
