const User = require('../models/User');
const router = require('express').Router();

router.post('/login', async function (req, res) {
	try {
		const {
			email,
			familyName,
			givenName,
			googleId,
			imageUrl,
			name,
			message,
		} = req.body;

		var user = await User.findOne({ googleId });
		if (user) {
			return res.status(200).json({ email, name, googleId, imageUrl });
		} else {
			const newUser = {
				email,
				lastName: familyName,
				firstName: givenName,
				googleId,
				imageUrl,
				displayName: name,
			};
			user = await User.create(newUser);
			return res.status(200).json({ email, name, googleId, imageUrl });
		}
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;
