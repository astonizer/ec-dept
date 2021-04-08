import React from 'react';
import { Table } from 'react-bootstrap';

function Btech2() {
	const table2a = [
		{
			id: 1,
			title:
				'IS-1 Engineering Mathematics-III (Mathematics and Humanities Dept.)',
			code: 'MA217',
			credits: '04',
			teaching: {
				l: 3,
				t: 1,
				p: 0,
			},
			examination: {
				theory: 100,
				tut: 25,
				termWork: '-',
				p: '-',
			},
			total: 125,
		},
		{
			id: 2,
			title: 'CS-1 Electronic Circuits',
			code: 'EC201',
			credits: '05',
			teaching: {
				l: 3,
				t: 1,
				p: 2,
			},
			examination: {
				theory: 100,
				tut: 25,
				termWork: 25,
				p: 25,
			},
			total: 175,
		},
		{
			id: 3,
			title: 'CS-2 Digital Logic Design',
			code: 'EC203',
			credits: '05',
			teaching: {
				l: 3,
				t: 1,
				p: 2,
			},
			examination: {
				theory: 100,
				tut: 25,
				termWork: 25,
				p: 25,
			},
			total: 175,
		},
		{
			id: 4,
			title: 'CS-3 Signals and Systems',
			code: 'EC205',
			credits: '04',
			teaching: {
				l: 3,
				t: 1,
				p: 0,
			},
			examination: {
				theory: 100,
				tut: 25,
				termWork: '-',
				p: '-',
			},
			total: 125,
		},
		{
			id: 5,
			title:
				'IS-1 Network Analysis and Synthesis (Electrical Engg. Dept.)',
			code: 'EE207',
			credits: '04',
			teaching: {
				l: 3,
				t: 1,
				p: 0,
			},
			examination: {
				theory: 100,
				tut: 25,
				termWork: '-',
				p: '-',
			},
			total: 125,
		},
	];

	const table2b = [
		{
			id: 1,
			title: 'CS-4 Statistical Signal Analsis',
			code: 'EC202',
			credits: '04',
			teaching: {
				l: 3,
				t: 1,
				p: 0,
			},
			examination: {
				theory: 100,
				tut: 25,
				termWork: '-',
				p: '-',
			},
			total: 125,
		},
		{
			id: 2,
			title: 'CS-5 Principles of Communication Systems',
			code: 'EC204',
			credits: '05',
			teaching: {
				l: 3,
				t: 1,
				p: 2,
			},
			examination: {
				theory: 100,
				tut: 25,
				termWork: 25,
				p: 25,
			},
			total: 175,
		},
		{
			id: 3,
			title: 'CS-6 Microprocessors and Microcontrollers',
			code: 'EC206',
			credits: '05',
			teaching: {
				l: 3,
				t: 1,
				p: 2,
			},
			examination: {
				theory: 100,
				tut: 25,
				termWork: 25,
				p: 25,
			},
			total: 175,
		},
		{
			id: 4,
			title: 'CS-7 Linear IC Applications (Electrical Dept.)',
			code: 'EC208',
			credits: '04',
			teaching: {
				l: 3,
				t: 1,
				p: 2,
			},
			examination: {
				theory: 100,
				tut: 25,
				termWork: 25,
				p: 25,
			},
			total: 175,
		},
		{
			id: 5,
			title: 'IS-2-CS-8 Control Systems (Electrical Dept.) ',
			code: 'EE214',
			credits: '04',
			teaching: {
				l: 3,
				t: 1,
				p: 0,
			},
			examination: {
				theory: 100,
				tut: 25,
				termWork: '-',
				p: '-',
			},
			total: 125,
		},
	];
	return (
		<>
			<Table striped responsive size="sm">
				<thead>
					<tr>
						<th className="p-3 text-center">Sr. No.</th>
						<th className="p-3 text-center">Course Title</th>
						<th className="p-3 text-center">Code</th>
						<th className="p-3 text-center">Credits</th>
						<th className="p-3 text-center">Teaching L*</th>
						<th className="p-3 text-center">Teaching T*</th>
						<th className="p-3 text-center">Teaching P*</th>
						<th className="p-3 text-center">Examination Theory</th>
						<th className="p-3 text-center">Examination Tut</th>
						<th className="p-3 text-center">
							Examination TermWork
						</th>
						<th className="p-3 text-center">Examination P*</th>
						<th className="p-3 text-center">Total</th>
					</tr>
				</thead>
				<tbody>
					{table2a.map(entry => {
						return (
							<tr key={entry.id}>
								<td className="p-3">{entry.id}</td>
								<td className="p-3">{entry.title}</td>
								<td className="p-3">{entry.code}</td>
								<td className="p-3">{entry.credits}</td>
								<td className="p-3">{entry.teaching.l}</td>
								<td className="p-3">{entry.teaching.t}</td>
								<td className="p-3">{entry.teaching.p}</td>
								<td className="p-3">
									{entry.examination.theory}
								</td>
								<td className="p-3">{entry.examination.tut}</td>
								<td className="p-3">
									{entry.examination.termWork}
								</td>
								<td className="p-3">{entry.examination.p}</td>
								<td className="p-3">{entry.total}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Table striped responsive size="sm">
				<thead>
					<tr>
						<th className="p-3 text-center">Sr. No.</th>
						<th className="p-3 text-center">Course Title</th>
						<th className="p-3 text-center">Code</th>
						<th className="p-3 text-center">Credits</th>
						<th className="p-3 text-center">Teaching L*</th>
						<th className="p-3 text-center">Teaching T*</th>
						<th className="p-3 text-center">Teaching P*</th>
						<th className="p-3 text-center">Examination Theory</th>
						<th className="p-3 text-center">Examination Tut</th>
						<th className="p-3 text-center">
							Examination TermWork
						</th>
						<th className="p-3 text-center">Examination P*</th>
						<th className="p-3 text-center">Total</th>
					</tr>
				</thead>
				<tbody>
					{table2b.map(entry => {
						return (
							<tr key={entry.id}>
								<td className="p-3">{entry.id}</td>
								<td className="p-3">{entry.title}</td>
								<td className="p-3">{entry.code}</td>
								<td className="p-3">{entry.credits}</td>
								<td className="p-3">{entry.teaching.l}</td>
								<td className="p-3">{entry.teaching.t}</td>
								<td className="p-3">{entry.teaching.p}</td>
								<td className="p-3">
									{entry.examination.theory}
								</td>
								<td className="p-3">{entry.examination.tut}</td>
								<td className="p-3">
									{entry.examination.termWork}
								</td>
								<td className="p-3">{entry.examination.p}</td>
								<td className="p-3">{entry.total}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</>
	);
}

export default Btech2;
