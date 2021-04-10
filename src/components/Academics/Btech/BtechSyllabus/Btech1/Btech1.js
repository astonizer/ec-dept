import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Btech1() {
	const table = [
		{
			id: 1,
			title: 'Engineering Mathematics-1',
			code: 'ASM101',
			dept: 'Department Of Applied Mathematics & Humanities',
		},
		{
			id: 2,
			title: 'Engineering Physics',
			code: 'ASP102ABC',
			dept: 'Department Of Applied Physics',
		},
		{
			id: 3,
			title: 'Engineering Chemistry',
			code: 'ASC103ABC',
			dept: 'Department Of Applied Chemistry',
		},
		{
			id: 4,
			title: 'Engineering Mechanics',
			code: 'AMD104ABC',
			dept: 'Department Of Applied Mechanics',
		},
		{
			id: 5,
			title: 'Engineering Drawing',
			code: 'CIME105ABC',
			dept:
				'Department Of Civil Engineering & Department Of Mechanical Engineering ',
		},
		{
			id: 6,
			title: 'Basics of Civil & Environmental Engineering',
			code: 'CICH106ABC',
			dept:
				'Department Of Civil Engineering & Department Of Chemical Engineering',
		},
		{
			id: 7,
			title: 'Engineering Mathematics II',
			code: 'ASM201',
			dept: 'Department Of Applied Mathematics & Humanities',
		},
		{
			id: 8,
			title: 'Electro-Techniques',
			code: 'ELE207ABC',
			dept: 'Department Of Electrical Engineering',
		},
		{
			id: 9,
			title: 'Fundamentals of Computer and Programming',
			code: 'COM208ABC',
			dept: 'Department Of Computer Engineering',
		},
		{
			id: 10,
			title: 'Basics of Electronics Engineering',
			code: 'ECE209ABC',
			dept: 'Department Of Electronics Engineering',
		},
		{
			id: 11,
			title: 'Basic Mechanical Systems',
			code: 'MED210ABC',
			dept: 'Department Of Mechanical Engineering',
		},
		{
			id: 12,
			title: 'English & Communication Skills',
			code: 'ASE211ABC',
			dept: 'Department Of Applied Mathematics & Humanities',
		},
		{
			id: 13,
			title: 'Workshop Practice',
			code: 'MED212ABC',
			dept: 'Department Of Mechanical-Production Engineering',
		},
	];
	return (
		<>
			<h5 className="my-5" align="center">
				Curriculum of B.Tech. 1st Year - EFFECTIVE FROM JULY 2020
				ONWARDS
			</h5>
			<Table striped responsive size="sm">
				<thead>
					<tr>
						<th className="p-3 text-center">Sr. No.</th>
						<th className="p-3 text-center">Course Title</th>
						<th className="p-3 text-center">Course Code</th>
						<th className="p-3 text-center">Taught By</th>
					</tr>
				</thead>
				<tbody>
					{table.map(entry => {
						if (entry.id != 10)
							return (
								<tr key={entry.id}>
									<td className="p-3">{entry.id}</td>
									<td className="p-3">{entry.title}</td>
									<td className="p-3">{entry.code}</td>
									<td className="p-3">{entry.dept}</td>
								</tr>
							);
						else
							return (
								<tr key={entry.id}>
									<td className="p-3">{entry.id}</td>
									<Link to="/academics/btech/syllabus/1/bs">
										<td className="p-3">{entry.title}</td>
									</Link>
									<td className="p-3">{entry.code}</td>
									<td className="p-3">{entry.dept}</td>
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

export default Btech1;
