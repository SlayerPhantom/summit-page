import React, { useState } from 'react';
import CustomNavbar from '../components/CustomNavbar';
import CustomFooter from '../components/CustomFooter';
import { Container } from 'react-bootstrap';
import '../style.css';
import EventCard from '../components/EventCard';
import Background from '../images/bg.png';
import { dayOne, dayTwo, dayThree } from '../eventInfo';

const JetSki = {
	name: 'JetSkiing',
	shortText: 'Come ski on the jets',
	longText: 'Come ski on the jets of the skis of the jets',
};

const items = [
	{
		photo: 'https://i.imgur.com/Kkcfhm7.jpg',
		name: 'John Testing',
		description: 'JOHNN',
	},
	{
		photo: 'https://i.imgur.com/bd2EhI2.jpg',
		name: 'Billy',
		description: 'BILLYY',
	},
	{
		photo: 'https://i.imgur.com/WHSGElT.jpg',
		name: 'Joel',
		description: 'JOELL',
	},
];

export default function Events() {
	const [eventDay, setEventDay] = useState(dayOne);
	const [day, setDay] = useState('Day One');
	const style = {
		backgroundImage: `url(${Background})`,
		backgroundSize: 'cover',
	};

	return (
		<div>
			<div style={style}>
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
					margin: '0 10px 0 10px',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<div>
					<h3 style={{ textAlign: 'center' }}>{day}</h3>
					<button
						className="btn btn-primary"
						style={{ marginLeft: '10px' }}
						onClick={() => {
							setEventDay(dayOne);
							setDay('Day One');
						}}
					>
						dayOne
					</button>
					<button
						className="btn btn-primary"
						style={{ marginLeft: '10px' }}
						onClick={() => {
							setEventDay(dayTwo);
							setDay('Day Two');
						}}
					>
						dayTwo
					</button>
					<button
						className="btn btn-primary"
						style={{ marginLeft: '10px' }}
						onClick={() => {
							setEventDay(dayThree);
							setDay('Day Three');
						}}
					>
						dayThree
					</button>
				</div>
			</div>
			<div
				style={{
					backgroundColor: 'rgb(220,220,220)',
					paddingBottom: '40px',
					display: 'flex',
					justifyContent: 'center',
					flexWrap: 'wrap',
				}}
			>
				{eventDay.map((event) => (
					<div style={{ padding: '20px' }}>
						<EventCard
							title={event.title}
							when={event.when}
							where={event.where}
						/>
					</div>
				))}
				{/* <div className="row pt-5 d-flex justify-content-center align-items-center pl-0 pr-0 mt-0 mr-0 ml-0">
					<EventCard
						title={JetSki.name}
						shortText={JetSki.shortText}
						longText={JetSki.longText}
					/>
					<EventCard
						title={JetSki.name}
						shortText={JetSki.shortText}
						longText={JetSki.longText}
					/>
					<EventCard
						title={JetSki.name}
						shortText={JetSki.shortText}
						longText={JetSki.longText}
					/>
				</div>
				<div className="row pt-5 d-flex justify-content-center align-items-center pl-0 pr-0 mt-0 mr-0 ml-0">
					<EventCard
						title={JetSki.name}
						shortText={JetSki.shortText}
						longText={JetSki.longText}
					/>
					<EventCard
						title={JetSki.name}
						shortText={JetSki.shortText}
						longText={JetSki.longText}
					/>
					<EventCard
						title={JetSki.name}
						shortText={JetSki.shortText}
						longText={JetSki.longText}
					/>
				</div> */}
			</div>
		</div>
	);
}
