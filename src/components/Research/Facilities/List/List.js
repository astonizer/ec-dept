import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './List.css';


function List() {
	return(
		<Container>
			<h4 className="title">
				List of existing high ended research facilities available in the department
			</h4>
			<Table striped bordered hover className="table">
				<thead>
					<tr>
						<th>Sr. No.</th>
						<th>Name of Laboratories</th>
						<th>Existing Research facilities</th>
						<th>Year of establishment & funded by</th>
						<th>Cost of the Asset (Rs.)</th>
						<th>Usage Charges</th>
					</tr>
				</thead>
				<tbody>					
					<tr>
						<td>1</td>
						<td>Communication Research Lab</td>
						<td>MXG Vector signal generator 100kHz-3GHz</td>
						<td>8/12/2011 Annual plan grant</td>
						<td>7,98,000/-</td>
						<td>200/- per hour</td>				
					</tr>
					<tr>
						<td>2</td>
						<td>Communication Research Lab</td>
						<td>MXG Vector signal generator 100kHz-3GHz</td>
						<td>8/12/2011 Annual plan grant</td>
						<td>7,98,000/-</td>
						<td>200/- per hour</td>				
					</tr>
					<tr>
						<td>2</td>
						<td>Communication Research Lab</td>
						<td>MXG Vector signal generator 100kHz-3GHz</td>
						<td>8/12/2011 Annual plan grant</td>
						<td>7,98,000/-</td>
						<td>200/- per hour</td>				
					</tr>
					<tr>
						<td>3</td>
						<td>Communication Research Lab</td>
						<td>MXG Vector signal generator 100kHz-3GHz</td>
						<td>8/12/2011 Annual plan grant</td>
						<td>7,98,000/-</td>
						<td>200/- per hour</td>				
					</tr>
					<tr>
						<td>4</td>
						<td>Communication Research Lab</td>
						<td>MXG Vector signal generator 100kHz-3GHz</td>
						<td>8/12/2011 Annual plan grant</td>
						<td>7,98,000/-</td>
						<td>200/- per hour</td>				
					</tr>				
				</tbody>
			</Table>
		</Container>
	)
}

export default List;
