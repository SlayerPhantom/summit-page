// google oAuth20 login
const router = require('express').Router();
const passport = require('passport');

router.get(
	'/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
	'/google/callback/',
	passport.authenticate('google', { failureRedirect: '/failed' }),
	function (req, res) {
		res.status(201).json({ ...req.user });
	}
);

router.get('/good', (req, res) => {
	console.log(req.user.email);
	res.json({ success: `successfully logged in ${req.user.displayName}` });
});

router.get('/failed', (req, res) => res.json({ error: 'failed to log in' }));

module.exports = router;
