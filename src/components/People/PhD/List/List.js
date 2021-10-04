import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './List.css';
import useFirestore from '../../../../hooks/useFirestore';

function List({ status }) {

	const a = useFirestore('mtech');
	console.log(a);

	// const [docs, setDocs] = useState([]);

	return (
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
						{!status && <th>Viva-Voce Ph. D Date</th>}
						<th>Supervisor’s Name</th>
						{!status && <th>Examiner's Name</th>}
					</tr>
				</thead>
				<tbody>

					{
						a.map((st, index) => {
							<tr>
								<td>{index}</td>
								<td>{st.roll}</td>
								<td>{st.name}</td>
								<td>{st.category}</td>
								<td>{st.supervisor}</td>
							</tr>
						})
					}
				</tbody>
			</Table>
		</Container >
	)
}

export default List;
