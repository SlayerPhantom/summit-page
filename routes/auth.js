// google oAuth20 login
const router = require('express').Router();
const passport = require('passport');

router.get(
	'/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
	'/google/callback/',
	passport.authenticate('google', {
		failureRedirect: 'http://localhost:3000/',
	}),
	function (req, res) {
		res.redirect('http://localhost:3000/speakers');
	}
);

router.get('/good', (req, res) => {
	console.log(req.user.email);
	res.json({ success: `successfully logged in ${req.user.displayName}` });
});

router.get('/failed', (req, res) => res.json({ error: 'failed to log in' }));

module.exports = router;
