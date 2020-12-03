import React, { useState } from 'react';
import DayOneSchedule from '../components/DayOneSchedule';
import DayTwoSchedule from '../components/DayTwoSchedule';
import DayThreeSchedule from '../components/DayThreeSchedule';

import { Container, Button } from 'react-bootstrap';
import '../css/style.css';

const DAYS = {
	ONE: '02/17/2021',
	TWO: '02/18/2021',
	THREE: '02/19/2021',
};

export default function Events() {
	const [day, setDay] = useState(DAYS['ONE']);

	const handleSetDay = (day) => setDay(day);

	return (
		<div>
			<div className="background">
				<Container>
					<Container
						className="row top-section justify-content-center align-middle"
						style={{
							height: '60vh',
							lineHeight: '60vh',
							textAlign: 'center',
							color: 'white',
							fontSize: '5rem',
							fontWeight: 'bold',
						}}
					>
						Events
					</Container>
				</Container>
			</div>

			<div
				style={{
					backgroundColor: 'rgb(220,220,220)',
					padding: '20px',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<div>
					<h3 style={{ textAlign: 'center' }}>{day}</h3>
					<Button
						variant="danger"
						className="ml-3"
						onClick={() => handleSetDay(DAYS['ONE'])}
					>
						02/17/2021
					</Button>

					<Button
						variant="danger"
						className="ml-3"
						onClick={() => handleSetDay(DAYS['TWO'])}
					>
						02/18/2021
					</Button>

					<Button
						variant="danger"
						className="ml-3"
						onClick={() => handleSetDay(DAYS['THREE'])}
					>
						02/19/2021
					</Button>
				</div>
			</div>

			{day === DAYS['ONE'] && <DayOneSchedule />}
			{day === DAYS['TWO'] && <DayTwoSchedule />}
			{day === DAYS['THREE'] && <DayThreeSchedule />}
		</div>
	);
}
