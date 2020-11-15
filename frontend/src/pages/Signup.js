import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import '../style.css';
import '../css/Signup.css';
import registerImg from '../images/register.jpg';

export default function Signup(props) {
	const [isRegistered, setIsRegistered] = useState(false);
	useEffect(() => {
		setIsRegistered(localStorage.getItem('isRegistered'));
	}, []);
	return (
		<div>
			<div className="backgroundWrapper">
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
						Sign up
					</Container>
				</Container>
			</div>

			<div style={{ display: 'flex', justifyContent: 'center' }}>
				{!isRegistered ? (
					<img
						src={registerImg}
						alt="register by clicking"
						style={{ height: '480px', width: '600px', padding: '20px' }}
						className="signup"
						onClick={async () => {
							try {
								let response;
								const user = localStorage.getItem('user');
								const email = localStorage.getItem('email');
								const givenName = localStorage.getItem('givenName');
								const familyName = localStorage.getItem('familyName');
								const token = localStorage.getItem('token');
								const googleId = localStorage.getItem('googleId');

								const payload = {
									email,
									givenName,
									familyName,
									googleId,
								};
								const config = {
									headers: {
										Authorization: `Bearer ${token}`,
									},
								};
								if (process.env.NODE_ENV === 'production') {
									response = await axios.post('/rsvp', payload, config);
									console.log(response);
								} else {
									response = await axios.post(
										'http://localhost:5000/rsvp',
										payload,
										config
									);
									console.log(response);
								}
								setIsRegistered(true);
							} catch (error) {
								console.error(error);
							}
						}}
					/>
				) : (
					<h1
						style={{
							padding: '50px',
							border: '1px solid black',
							margin: '30px',
						}}
					>
						Already Registered for event
					</h1>
				)}
			</div>
		</div>
	);
}
