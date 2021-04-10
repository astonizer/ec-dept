import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './List.css';


function List({ status }) {
	return(
		<Container>
			<h4 className="title">
				{status ? 'Ongoing Ph.D Student\'s List' : 'Completed Ph.D Students List(updated upto March-2021)'}
			</h4>
			<Table striped bordered hover className="table">
				<thead>
					<tr>
						<th>Sr. No.</th>
						<th>Roll No</th>
						<th>Name</th>
						<th>Category</th>
						<th>Research Area/Thesis Title</th>
						{	!status &&	<th>Viva-Voce Ph. D Date</th>}
						<th>Supervisor’s Name</th>
						{ !status &&	 <th>Examiner's Name</th>}
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>Otto</td>
						{ !status && <td>Otto</td>}					
						<td>@mdo</td>
						{ !status && <td>Otto</td>}
					</tr>
				</tbody>
			</Table>
		</Container>
	)
}

export default List;
