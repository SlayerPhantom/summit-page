import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import '../css/style.css';
import '../css/Signup.css';
import registerImg from '../images/register.jpg';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Row,
	Col,
} from 'react-bootstrap';
import buildURL from '../utils/buildURL';

export default function Signup(props) {
	const [isRegistered, setIsRegistered] = useState(false);
	const [email, setemail] = useState('');
	const [fname, setfname] = useState('');
	const [lname, setlname] = useState('');
	const [isediting, setisediting] = useState(false);
	useEffect(() => {
		const onload = async () => {
			try {
				if (localStorage.getItem('isRegistered') === 'false')
					setIsRegistered(false);
				else setIsRegistered(true);
				setfname(localStorage.getItem('givenName'));
				setlname(localStorage.getItem('familyName'));
				setemail(localStorage.getItem('email'));
				if (localStorage.getItem('isRegistered') === 'true') {
					const token = localStorage.getItem('token');
					const payload = { googleId: localStorage.getItem('googleId') };
					const headers = { Authorization: `Bearer ${token}` };
					const url = buildURL('rsvp/getrsvp');
					const res = await axios.post(url, payload, { headers });
					// const res = await axios.post(
					// 	'http://localhost:5000/rsvp/getrsvp',
					// 	payload,
					// 	{ headers }
					// );
					if (res.data.errors) {
						console.log(res.data.errors);
						return;
					}
					setfname(res.data.fname);
					setlname(res.data.lname);
					setemail(res.data.email);
				}
			} catch (error) {
				console.log(error);
			}
		};
		onload();
	}, []);

	async function register() {
		try {
			const token = localStorage.getItem('token');
			const headers = { Authorization: `Bearer ${token}` };
			const googleId = localStorage.getItem('googleId');
			const payload = {
				firstName: fname,
				lastName: lname,
				email,
				googleId,
			};
			console.log(token);
			console.log(payload);
			// const res = await axios.post('http://localhost:5000/rsvp', payload, {
			// 	headers,
			// });
			const url = buildURL('rsvp');
			const res = await axios.post(url, payload, { headers });
			if (res.data.errors) {
				console.log(res.data.errors);
			} else {
				setIsRegistered(true);
				localStorage.setItem('isRegistered', 'true');
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function editrsvp() {
		try {
			const payload = {
				email,
				firstName: fname,
				lastName: lname,
				googleId: localStorage.getItem('googleId'),
			};
			console.log(payload);
			const token = localStorage.getItem('token');
			const headers = { Authorization: `Bearer ${token}` };
			// const url = `http://localhost:5000/rsvp/edit`;
			const url = buildURL('rsvp/edit');
			const res = await axios.post(url, payload, { headers });
			if (res.data.errors) {
				console.log(res.data.errors);
			}
			setisediting(!isediting);
		} catch (error) {
			console.log(error);
		}
	}

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
							height: '60%',
							width: '40%',
							display: 'grid',
							placeItems: 'center',
							backgroundColor: 'black',
							color: 'white',
							borderRadius: '10px',
						}}
					>
						<h3>Register Here</h3>
						<form style={{ height: '360px', width: '480px', padding: '20px' }}>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label for="first name">First Name</label>
									<input
										type="text"
										className="form-control"
										placeholder="First Name"
										value={fname}
										onChange={(e) => setfname(e.target.value)}
									/>
								</div>
								<div className="form-group col-md-6">
									<label for="Last Name">Last Name</label>
									<input
										type="text"
										className="form-control"
										placeholder="Last Name"
										value={lname}
										onChange={(e) => setlname(e.target.value)}
									/>
								</div>
							</div>
							<div className="form-group">
								<label for="Email Adress">Email Address</label>
								<input
									type="email"
									className="form-control"
									placeholder="Email Address"
									value={email}
									onChange={(e) => setemail(e.target.value)}
								/>
							</div>
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<button
									type="button"
									className="btn btn-primary"
									onClick={() => register()}
								>
									Register
								</button>
							</div>
						</form>
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
						<div style={{ display: 'flex' }}>
							<div>
								{!isediting ? (
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
								) : null}
								{!isediting ? (
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										<button
											type="button"
											className="btn btn-success"
											onClick={() => setisediting(!isediting)}
										>
											Edit
										</button>
									</div>
								) : null}
							</div>
							{isediting ? (
								<div>
									<form
										style={{
											height: '360px',
											width: '480px',
											padding: '20px',
											backgroundColor: 'black',
											color: 'white',
										}}
									>
										<h3 style={{ textAlign: 'center', marginBottom: '10px' }}>
											Edit Your Registration
										</h3>
										<div className="form-row">
											<div className="form-group col-md-6">
												<label for="first name">First Name</label>
												<input
													type="text"
													className="form-control"
													placeholder="First Name"
													value={fname}
													onChange={(e) => setfname(e.target.value)}
												/>
											</div>
											<div className="form-group col-md-6">
												<label for="Last Name">Last Name</label>
												<input
													type="text"
													className="form-control"
													placeholder="Last Name"
													value={lname}
													onChange={(e) => setlname(e.target.value)}
												/>
											</div>
										</div>
										<div className="form-group">
											<label for="Email Adress">Email Address</label>
											<input
												type="email"
												className="form-control"
												placeholder="Email Address"
												value={email}
												onChange={(e) => setemail(e.target.value)}
											/>
										</div>
									</form>
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										<button
											type="button"
											className="btn btn-success"
											onClick={() => editrsvp()}
										>
											Edit
										</button>
										<button
											className="btn btn-secondary"
											onClick={() => setisediting(!isediting)}
										>
											cancel
										</button>
									</div>
								</div>
							) : null}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
