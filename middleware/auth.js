function isAuthenticated(req, res, next) {
	if (req.isAuthenticated()) return next();
	else res.redirect('https://ubreakifix2020summit.herokuapp.com/');
}
