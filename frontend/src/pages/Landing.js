import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import '../css/Landing.css';

export default function Landing(props) {
	return (
		<div className="wrapper">
			<div className="container">
				2020 Summit
				<br />
				<button
					className="signIn"
					onClick={() =>
						window.location.replace('http://localhost:5000/auth/google')
					}
				>
					Sign in with Google
				</button>
			</div>
		</div>
	);
}
