// rsvp apis
const router = require('express').Router();

const User = require('../models/User');
const RSVP = require('../models/RSVP');

const { isAuthenticated } = require('../utils/auth');
const { validateEmail } = require('../utils/validation.js');

// register for event
router.post('/', isAuthenticated, async (req, res) => {
	try {
		const { email, firstName, lastName, googleId } = req.body;
		if (
		 	email.trim() === '' ||
		 	firstName.trim() === '' ||
		 	lastName.trim() === ''
		 )
		 	return res.json({errors: 'All fields are required'});

		const { valid, errors } = validateEmail(email);
		if (!valid) return res.json({ errors });

		const user = await User.findOne({ googleId });
		user.isRegistered = true;
		await user.save();
		if (user) {
			const rsvp = await RSVP.findOne({ googleId });
			if (rsvp)
				return res.json({ error: 'you are already registered' });
			else {
				const newRSVP = { email, firstName, lastName, googleId };
				const result = await RSVP.create(newRSVP);
				return res.json({
					success: `${firstName} ${lastName} successfully registered`,
				});
			}
		} else {
			return res.json({ error: 'No user with this googleId exists' });
		}
	} catch (err) {
		return res.json({ error: err });
	}
});

// unregister for event
router.delete('/', isAuthenticated, async (req, res) => {
	try {
		const { googleId } = req.body;
		const rsvp = await RSVP.findOneAndDelete({ googleId });
		if (rsvp) {
			return res.status.json({ message: 'successfully deleted rsvp' });
		} else {
			return res.status.json({
				error: 'this account is not registered for the event',
			});
		}
	} catch (err) {
		return res.status.json({ error: 'something went wrong' });
	}
});

// edit information from registration
router.post('/edit', isAuthenticated, async (req, res) => {
	try {
		const { email, firstName, lastName, googleId } = req.body;
		if (
			email.trim() === '' ||
			firstName.trim() === '' ||
			lastName.trim() === ''
		)
			return res.json({errors: 'All fields are required'});

		const { valid, errors } = validateEmail(email);
		if (!valid) return res.json({ errors });

		const user = await User.findOne({ googleId });

		if (user) {
			const rsvp = await RSVP.findOne({ googleId });
			if (rsvp) {
				rsvp.overwrite({
					googleId: googleId,
					email,
					firstName,
					lastName,
				});
				await rsvp.save();
			} else {
				return res.json({ error: 'this account is not registered for the event' });
			}
		} else {
			throw new Error('No user with this ID exists');
		}
	} catch (err) {
		return res.json({ error: 'something went wrong' });
	}
});

router.post('/getrsvp', isAuthenticated, async function (req, res) {
	try {
		const { googleId } = req.body;
		const rsvp = await RSVP.findOne({ googleId });
		if (!rsvp) {
			return res.json({ errors: 'you are not registered' });
		}
		return res.json({
			fname: rsvp.firstName,
			lname: rsvp.lastName,
			email: rsvp.email,
		});
	} catch (error) {
		return res.json({ errors: error });
	}
});

module.exports = router;
