import React from 'react';
import { Table } from 'react-bootstrap';

function Btech4() {
	const table2a = [
		{
			id: 1,
			title: 'CS-1 VLSI Design',
			code: 'EC401',
			credits: '05',
			teaching: {
				l: 4,
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
			id: 2,
			title: 'CS-2 Mobile Communication',
			code: 'EC403',
			credits: '05',
			teaching: {
				l: 4,
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
			title: 'CS-3 Electronics Instrumentations',
			code: 'EC405',
			credits: '04',
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
			id: 4,
			title: 'Elective - I (ES)',
			code: 'EC4XX',
			credits: '04',
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
		{
			id: 5,
			title: 'CS-5 Seminar',
			code: 'EC407',
			credits: '02',
			teaching: {
				l: 0,
				t: 0,
				p: 4,
			},
			examination: {
				l: 0,
				t: 0,
				p: 100,
			},
			total: 100,
		},
		{
			id: 6,
			title: 'CS-4 Project Preliminaries',
			code: 'EC409',
			credits: '02',
			teaching: {
				l: 0,
				t: 0,
				p: 4,
			},
			examination: {
				l: 0,
				t: 0,
				p: 100,
			},
			total: 100,
		},
	];

	const table2b = [
		{
			id: 1,
			title: 'CS-1 RF & Microwave Engineering',
			code: 'EC402',
			credits: '05',
			teaching: {
				l: 4,
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
			id: 2,
			title: 'CS-2 Electronics System Design',
			code: 'EC404',
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
			title: 'IS-1 Industrial Management: Theory & Practices',
			code: 'MH404',
			credits: '04',
			teaching: {
				l: 3,
				t: 1,
				p: 0,
			},
			examination: {
				l: 100,
				t: 25,
				p: 0,
			},
			total: 125,
		},
		{
			id: 4,
			title: 'EIS - II (ES)',
			code: 'EC4XX',
			credits: '05',
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
			total: 175,
		},
		{
			id: 5,
			title: 'Project',
			code: 'EC406',
			credits: '05',
			teaching: {
				l: 0,
				t: 0,
				p: 10,
			},
			examination: {
				l: 0,
				t: 0,
				p: 250,
			},
			total: 250,
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

export default Btech4;
