import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css';
import EventCard from '../components/EventCard';

import oceanaBallroom from '../images/oceanaBallroom.jpg';
import lobby from '../images/lobby.jpg';

import citywalk from '../images/citywalk.jpg';
import promenade from '../images/promenade.jpg';

export default function DayOneSchedule() {
	return (
		<div>
			<div
				style={{
					backgroundColor: 'rgb(220,220,220)',
					paddingBottom: '40px',
					display: 'flex',
					justifyContent: 'center',
					flexWrap: 'wrap',
				}}
			>
				<Container>
					<Row className="justify-content-center">
						<Col>
							<EventCard
								photo={lobby}
								title={'Check in & Badge Pick-up'}
								when={'6:00 pm'}
								where={'Registration South Desk'}
							></EventCard>
						</Col>

						<Col>
							<EventCard
								photo={oceanaBallroom}
								title={'Awards ceremony Dinner'}
								when={'7:00 pm'}
								where={'Room A - Oceana Grand Ballroom'}
							></EventCard>
						</Col>

						<Col>
							<EventCard
								photo={promenade}
								title={'Reception'}
								when={'8:00 pm'}
								where={'Promenade Deck'}
							></EventCard>
						</Col>
					</Row>

					<Row className="mt-5">
						<Col xs={4}>
							<EventCard
								photo={citywalk}
								title={'Ferry to Universal Citywalk'}
								when={'10:00 pm'}
								where={'Off of Promenade Deck'}
							></EventCard>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}
