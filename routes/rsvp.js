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

		const user = await User.findOne({ googleId });
		if (user) {
			const rsvp = await RSVP.findOne({ googleId });
			if (rsvp)
				return res.status(400).json({ error: 'you are already registered' });
			else {
				const newRSVP = { email, firstName, lastName, googleId };
				const result = await RSVP.create(newRSVP);
				user.isRegistered = true;
				await user.save();
				return res.status(201).json({
					success: `${firstName} ${lastName} successfully registered`,
				});
			}
		} else {
			res.status(400).json({ error: 'No user with this googleId exists' });
		}
	} catch (err) {
		res.status(400).json({ error: err });
	}
});

// unregister for event
router.delete('/', isAuthenticated, async (req, res) => {
	try {
		const { googleId } = req.body;
		const rsvp = await RSVP.findOneAndDelete({ googleId });
		if (rsvp) {
			res.status.json({ message: 'successfully deleted rsvp' });
		} else {
			res.status.json({
				error: 'this account is not registered for the event',
			});
		}
	} catch (err) {
		res.status.json({ error: 'something went wrong' });
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
			return res.status(400).json('All fields are required');

		const { valid, errors } = validateEmail(email);
		if (!valid) return res.status(400).json({ errors });

		const user = await User.findOne({ googleId });

		if (user) {
			const rsvp = await RSVP.findOne({ googleId });
			if (rsvp) {
				rsvp.overwrite({
					googleId: req.user.googleId,
					email,
					firstName,
					lastName,
				});
				await rsvp.save();
			} else {
				res
					.status(400)
					.json({ error: 'this account is not registered for the event' });
			}
		} else {
			throw new Error('No user with this ID exists');
		}
	} catch (err) {
		res.status(400).json({ error: 'something went wrong' });
	}
});

module.exports = router;
