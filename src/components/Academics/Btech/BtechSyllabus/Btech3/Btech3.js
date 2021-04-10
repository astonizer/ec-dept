import React from 'react';
import { Table } from 'react-bootstrap';

function Btech3() {
	const table2a = [
		{
			id: 1,
			title: 'CS-1 Digital Communication',
			code: 'EC301',
			credits: '05',
			teaching: {
				l: 3,
				t: 1,
				p: 2,
			},
			examination: {
				l: 100,
				t: 25,
				p: 50,
			},
			total: 175,
		},
		{
			id: 2,
			title: 'CS-2 Digital Signal Processing',
			code: 'EC303',
			credits: '05',
			teaching: {
				l: 3,
				t: 1,
				p: 2,
			},
			examination: {
				l: 100,
				t: 25,
				p: 50,
			},
			total: 175,
		},
		{
			id: 3,
			title: 'CS-3 Analog Integrated Circuits',
			code: 'EC305',
			credits: '05',
			teaching: {
				l: 3,
				t: 1,
				p: 2,
			},
			examination: {
				l: 100,
				t: 25,
				p: 50,
			},
			total: 175,
		},
		{
			id: 4,
			title: 'CS-4 Electromagnetic Waves & Radiating System',
			code: 'EC205',
			credits: '05',
			teaching: {
				l: 3,
				t: 1,
				p: 2,
			},
			examination: {
				l: 100,
				t: 25,
				p: 50,
			},
			total: 175,
		},
		{
			id: 5,
			title: 'EIS - I',
			code: 'EC3XX',
			credits: '03',
			teaching: {
				l: 3,
				t: 0,
				p: 0,
			},
			examination: {
				l: 100,
				t: 0,
				p: 0,
			},
			total: 100,
		},
	];

	const table2b = [
		{
			id: 1,
			title: 'CS-1 Data Communications & Networks',
			code: 'EC301',
			credits: '05',
			teaching: {
				l: 3,
				t: 1,
				p: 2,
			},
			examination: {
				l: 100,
				t: 25,
				p: 50,
			},
			total: 175,
		},
		{
			id: 2,
			title: 'CS-2 Digital Integrated Circuits',
			code: 'EC304',
			credits: '05',
			teaching: {
				l: 3,
				t: 0,
				p: 2,
			},
			examination: {
				l: 100,
				t: 0,
				p: 50,
			},
			total: 150,
		},
		{
			id: 3,
			title: 'CS-3 Embedded Systems',
			code: 'EC306',
			credits: '05',
			teaching: {
				l: 3,
				t: 1,
				p: 2,
			},
			examination: {
				l: 100,
				t: 25,
				p: 50,
			},
			total: 175,
		},
		{
			id: 4,
			title: 'CS-4 Fiber Optics Communications',
			code: 'EC308',
			credits: '05',
			teaching: {
				l: 3,
				t: 1,
				p: 2,
			},
			examination: {
				l: 100,
				t: 25,
				p: 50,
			},
			total: 175,
		},
		{
			id: 5,
			title: 'EIS - II',
			code: 'EC3XX',
			credits: '03',
			teaching: {
				l: 3,
				t: 0,
				p: 0,
			},
			examination: {
				l: 100,
				t: 0,
				p: 0,
			},
			total: 100,
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
	return <div>Btech-3</div>;
}

export default Btech3;
