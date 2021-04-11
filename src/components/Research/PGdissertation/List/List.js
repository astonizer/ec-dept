import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './List.css';


function List({ categories }) {
	return(
		<Container>
			<h4 className="title"> {categories} (CS + VLSI) </h4>
			<Table striped bordered hover className="table">
				<thead>
					<tr>
						<th>Sr. No.</th>
						<th>Admission No</th>
						<th>Student’s Name</th>
						<th>Dissertation Title</th>
						<th>Guide</th>
						<th>External Examiner</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>P15EC001</td>
						<td>Navraj Ashok Kaushal</td>
						<td>Parametric Analysis of ODM-Index Modulation using MMSE and its extension to MIMO-MRC</td>
						<td>Dr. U. D. Dalal</td>
						<td>Dr. Arvind Kumar, Assistant ProfessorNIT, Kurukshetra</td>
					</tr>
					<tr>
						<td>2</td>
						<td>P15EC001</td>
						<td>Navraj Ashok Kaushal</td>
						<td>Parametric Analysis of ODM-Index Modulation using MMSE and its extension to MIMO-MRC</td>
						<td>Dr. U. D. Dalal</td>
						<td>Dr. Arvind Kumar, Assistant ProfessorNIT, Kurukshetra</td>
					</tr>
					<tr>
						<td>3</td>
						<td>P15EC001</td>
						<td>Navraj Ashok Kaushal</td>
						<td>Parametric Analysis of ODM-Index Modulation using MMSE and its extension to MIMO-MRC</td>
						<td>Dr. U. D. Dalal</td>
						<td>Dr. Arvind Kumar, Assistant ProfessorNIT, Kurukshetra</td>
					</tr>
					<tr>
						<td>4</td>
						<td>P15EC001</td>
						<td>Navraj Ashok Kaushal</td>
						<td>Parametric Analysis of ODM-Index Modulation using MMSE and its extension to MIMO-MRC</td>
						<td>Dr. U. D. Dalal</td>
						<td>Dr. Arvind Kumar, Assistant ProfessorNIT, Kurukshetra</td>
					</tr>
					<tr>
						<td>5</td>
						<td>P15EC001</td>
						<td>Navraj Ashok Kaushal</td>
						<td>Parametric Analysis of ODM-Index Modulation using MMSE and its extension to MIMO-MRC</td>
						<td>Dr. U. D. Dalal</td>
						<td>Dr. Arvind Kumar, Assistant ProfessorNIT, Kurukshetra</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	)
}

export default List;
