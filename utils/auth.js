const { OAuth2Client } = require('google-auth-library');

function isAuthenticated(req, res, next) {
	if (req.headers.authorization) {
		const client = new OAuth2Client(process.env.Google_CLIENT_ID);
		const val = req.headers.authorization;
		const token = val.split('Bearer ')[1];
		async function verify() {
			const ticket = await client.verifyIdToken({
				idToken: token,
				audience: process.env.Google_CLIENT_ID,
			});
			const payload = ticket.getPayload();
			const userid = payload['sub'];
		}
		verify().catch(console.error);
		next();
	} else {
		console.log('No token is present');
		return false;
	}
}

exports.isAuthenticated = isAuthenticated;
