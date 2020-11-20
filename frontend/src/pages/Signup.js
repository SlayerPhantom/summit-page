import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import '../style.css';
import '../css/Signup.css';
import registerImg from '../images/register.jpg';

export default function Signup(props) {
	const [isRegistered, setIsRegistered] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('isRegistered') === 'false')
			setIsRegistered(false);
		else setIsRegistered(true);
	}, []);

	return (
		<div>
			<div className="backgroundWrapper">
				<Container>
					<Container
						className="row top-section justify-content-center align-middle"
						style={{
							height: '80vh',
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

			<div
				style={{ display: 'flex', justifyContent: 'center', height: '10vh' }}
			>
				{!isRegistered ? (
					<div
						style={{
							position: 'absolute',
							top: '80px',
							height: '100vh',
							display: 'grid',
							placeItems: 'center',
						}}
					>
						<img
							src={registerImg}
							alt="register by clicking"
							style={{ height: '360px', width: '480px', padding: '20px' }}
							className="signup"
							onClick={async () => {
								try {
									let response;
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
									}
									localStorage.setItem('isRegistered', 'true');
									setIsRegistered(true);
								} catch (error) {
									console.error(error);
								}
							}}
						/>
					</div>
				) : (
					<div
						style={{
							position: 'absolute',
							top: '80px',
							height: '100vh',
							display: 'grid',
							placeItems: 'center',
						}}
					>
						<div
							style={{
								padding: '50px',
								backgroundColor: 'black',
								color: 'white',
							}}
						>
							<h1>Registered For</h1>
							<img
								src="https://d1zmiyu61cpipt.cloudfront.net/assets/images/ubif_logo_dark.svg"
								alt="logo"
							/>
							<h1>SUMMIT 2021</h1>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
