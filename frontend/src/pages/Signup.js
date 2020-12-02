<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import '../style.css';
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
} from 'reactstrap';

export default function Signup(props) {
	const [isRegistered, setIsRegistered] = useState(false);
	const [email, setemail] = useState('');
	const [fname, setfname] = useState('');
	const [lname, setlname] = useState('');
	const [isediting, setisediting] = useState(false);
	useEffect(() => {
		if (localStorage.getItem('isRegistered') === 'false')
			setIsRegistered(false);
		else setIsRegistered(true);
		setfname(localStorage.getItem('givenName'));
		setlname(localStorage.getItem('familyName'));
		setemail(localStorage.getItem('email'));
		if (fname == undefined) setfname('');
		if (lname == undefined) setlname('');
	}, []);

	async function register() {
		try {
			const token = localStorage.getItem('token');
			const headers = { token };
			const googleId = localStorage.getItem('googleId');
			const payload = {
				givenName: fname,
				familyName: lname,
				email,
				googleId,
			};
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
						// style={{
						// 	position: 'absolute',
						// 	top: '100px',
						// 	display: 'flex',
						// 	justifyContent: 'center',
						// 	height: '80vh',
						// 	width: '40%',
						// 	backgroundColor: 'black',
						// 	color: 'white',
						// 	borderRadius: '10px',
						// }}
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
						{/* <img
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
						/> */}
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
								{!isediting ? (
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										<button
											className="btn btn-success"
											onClick={() => setisediting(true)}
										>
											Edit
										</button>
									</div>
								) : null}
							</div>
							{isediting ? (
								<div>
									<h3 style={{ textAlign: 'center' }}>Edit you registration</h3>
									<form
										style={{
											// height: '360px',
											// width: '480px',
											// padding: '20px',
											backgroundColor: 'black',
											color: 'white',
										}}
									>
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
												Edit
											</button>
										</div>
									</form>
								</div>
							) : null}
						</div>
					</div>
				)}
			</div>
		</div>
	);
=======
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import "../css/style.css";
import "../css/Signup.css";
import registerImg from "../images/register.jpg";

export default function Signup(props) {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isRegistered") === "false")
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
              height: "80vh",
              lineHeight: "60vh",
              textAlign: "center",
              color: "white",
              fontSize: "5rem",
              fontWeight: "bold",
            }}
          >
            Sign up
          </Container>
        </Container>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", height: "10vh" }}
      >
        {!isRegistered ? (
          <div
            style={{
              position: "absolute",
              top: "80px",
              height: "100vh",
              display: "grid",
              placeItems: "center",
            }}
          >
            <img
              src={registerImg}
              alt="register by clicking"
              style={{ height: "360px", width: "480px", padding: "20px" }}
              className="signup"
              onClick={async () => {
                try {
                  let response;
                  const email = localStorage.getItem("email");
                  const givenName = localStorage.getItem("givenName");
                  const familyName = localStorage.getItem("familyName");
                  const token = localStorage.getItem("token");
                  const googleId = localStorage.getItem("googleId");

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
                  if (process.env.NODE_ENV === "production") {
                    response = await axios.post("/rsvp", payload, config);
                    console.log(response);
                  } else {
                    response = await axios.post(
                      "http://localhost:5000/rsvp",
                      payload,
                      config
                    );
                  }
                  localStorage.setItem("isRegistered", "true");
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
              position: "absolute",
              top: "80px",
              height: "100vh",
              display: "grid",
              placeItems: "center",
            }}
          >
            <div
              style={{
                padding: "50px",
                backgroundColor: "black",
                color: "white",
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
>>>>>>> e254e578fb6025659d1d2ac6036f1714ea27a8c3
}
