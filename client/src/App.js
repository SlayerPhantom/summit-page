import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import axios from 'axios';

import RSVP from './RSVP';

function App() {
	const [tokenObj, setToken] = useState({});
	const [user, setUser] = useState(null);

	async function responseGoogle(response) {
		try {
			const {
				email,
				familyName,
				givenName,
				googleId,
				imageUrl,
				name,
			} = await response.profileObj;
			const { tokenObj } = response;
			setToken(tokenObj);
			setUser({ email, familyName, givenName, googleId, imageUrl, name });
			if (user) {
				console.log(user);
				axios.post('/login', { ...user });
			}
		} catch (err) {
			console.log(err);
		}
	}

	function responseError(response) {
		console.log(response);
	}

	function logout(response) {
		setUser(null);
	}

	return (
		<div>
			<GoogleLogin
				clientId="899787207644-c93oqaoparu0hp2tb3uu0e48bg3td6mq.apps.googleusercontent.com"
				buttonText="Sign in with Google"
				onSuccess={responseGoogle}
				onFailure={responseError}
				cookiePolicy={'single_host_origin'}
			/>
			<GoogleLogout
				clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
				buttonText="Logout"
				onLogoutSuccess={logout}
			></GoogleLogout>
			{user ? (
				<div>
					<br />
					<p>
						email: {user.email} name: {user.name}
					</p>
					<RSVP id_token={tokenObj.id_token} googleId={user.googleId}></RSVP>
				</div>
			) : null}
		</div>
	);
}

export default App;
