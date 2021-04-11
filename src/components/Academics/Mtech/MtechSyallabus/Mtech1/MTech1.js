import React from 'react';
import { Table } from 'react-bootstrap';

function Mtech1() {
	const table = [
		{
			id: 1,
			title: 'RF Circuits & Systems',
			code: '	EC601',
			credits: '03',
		},
		{
			id: 2,
			title: 'Advance Optical Communication Systems',
			code: '	EC603',
			credits: '03',
		},
		{
			id: 3,
			title: 'Advance Digital Signal Processing',
			code: '	EC605',
			credits: '03',
		},
		{
			id: 4,
			title: 'Communication Laboratory-I',
			code: '	EC607',
			credits: '04',
		},
	];
	return (
		<>
			<h5 className="my-5" align="center">
            Curriculum of M.Tech. in <b>Communication System</b> 1st Year
			</h5>
			<Table striped responsive size="sm">
				<thead>
					<tr>
						<th className="p-3 text-center">Sr. No.</th>
						<th className="p-3 text-center">Name of Subjects</th>
						<th className="p-3 text-center">Course Code</th>
						<th className="p-3 text-center">Credits</th>
					</tr>
				</thead>
				<tbody>
					{table.map(entry => {
						return (
							<tr key={entry.id}>
								<td className="p-3">{entry.id}</td>
								<td className="p-3">{entry.title}</td>
								<td className="p-3">{entry.code}</td>
								<td className="p-3">{entry.credits}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<br />
			<h5>*** Subjects to be completed within two semesters.</h5>
		</>
	);
}

export default Mtech1;