import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './List.css';


function List({ status }) {
	return(
		<Container>
			<h4 className="title">
				{status ? 'On Going Projects Details' : 'Completed Projects Details'}
			</h4>
			<Table striped bordered hover className="table">
				<thead>
					<tr>
						<th>Sr. No.</th>
						<th>Title of the project</th>
						<th>Sponsoring agency</th>
						<th>Date</th>
						<th>Total Sanctioned Amount</th>
						<th>Coordinator/Project Investigator</th>
					</tr>
				</thead>
				<tbody>
					{
						status ? (
							<>
								<tr>
									<td>1</td>
									<td>Special Manpower Development Programme for chips to System Design (SMDP-C2SD) Sanction Order: 9(1)/2014-MDD, Date: 04/02/2015</td>
									<td>DEIT, MCIT, GoI, New Delhi</td>
									<td>February, 2015</td>
									<td>Fund released Rs. 43,64,000.00</td>
									<td>Dr. A. D. Darji, Mr. P. J. Engineer</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Special Manpower Development Programme for chips to System Design (SMDP-C2SD) Sanction Order: 9(1)/2014-MDD, Date: 04/02/2015</td>
									<td>DEIT, MCIT, GoI, New Delhi</td>
									<td>February, 2015</td>
									<td>Fund released Rs. 43,64,000.00</td>
									<td>Dr. A. D. Darji, Mr. P. J. Engineer</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Special Manpower Development Programme for chips to System Design (SMDP-C2SD) Sanction Order: 9(1)/2014-MDD, Date: 04/02/2015</td>
									<td>DEIT, MCIT, GoI, New Delhi</td>
									<td>February, 2015</td>
									<td>Fund released Rs. 43,64,000.00</td>
									<td>Dr. A. D. Darji, Mr. P. J. Engineer</td>
								</tr>
								<tr>
									<td>4</td>
									<td>Special Manpower Development Programme for chips to System Design (SMDP-C2SD) Sanction Order: 9(1)/2014-MDD, Date: 04/02/2015</td>
									<td>DEIT, MCIT, GoI, New Delhi</td>
									<td>February, 2015</td>
									<td>Fund released Rs. 43,64,000.00</td>
									<td>Dr. A. D. Darji, Mr. P. J. Engineer</td>
								</tr>
								<tr>
									<td>5</td>
									<td>Special Manpower Development Programme for chips to System Design (SMDP-C2SD) Sanction Order: 9(1)/2014-MDD, Date: 04/02/2015</td>
									<td>DEIT, MCIT, GoI, New Delhi</td>
									<td>February, 2015</td>
									<td>Fund released Rs. 43,64,000.00</td>
									<td>Dr. A. D. Darji, Mr. P. J. Engineer</td>
								</tr>
							</> ) : (
							<>
								<tr>
									<td>1</td>
									<td>Laboratory Development for Wireless Communication</td>
									<td>Agilent Technologies</td>
									<td>28/03/2011 5 years</td>
									<td>16 lacs in terms of System Vue Software and VSA</td>
									<td>Dr. U. D. Dalal</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Laboratory Development for Wireless Communication</td>
									<td>Agilent Technologies</td>
									<td>28/03/2011 5 years</td>
									<td>16 lacs in terms of System Vue Software and VSA</td>
									<td>Dr. U. D. Dalal</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Laboratory Development for Wireless Communication</td>
									<td>Agilent Technologies</td>
									<td>28/03/2011 5 years</td>
									<td>16 lacs in terms of System Vue Software and VSA</td>
									<td>Dr. U. D. Dalal</td>
								</tr>
								<tr>
									<td>4</td>
									<td>Laboratory Development for Wireless Communication</td>
									<td>Agilent Technologies</td>
									<td>28/03/2011 5 years</td>
									<td>16 lacs in terms of System Vue Software and VSA</td>
									<td>Dr. U. D. Dalal</td>
								</tr>
								<tr>
									<td>5</td>
									<td>Laboratory Development for Wireless Communication</td>
									<td>Agilent Technologies</td>
									<td>28/03/2011 5 years</td>
									<td>16 lacs in terms of System Vue Software and VSA</td>
									<td>Dr. U. D. Dalal</td>
								</tr>
							</>
							)
					}
				</tbody>
			</Table>
		</Container>
	)
}

export default List;
