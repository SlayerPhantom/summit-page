const express = require('express');
const passport = require('passport');
const cors = require('cors');

require('dotenv').config({ path: './config/config.env' });
// require('./config/passport')(passport);

const app = express();
// app.use(passport.initialize());
const { connectDB } = require('./config/db');

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PATCH, DELETE, OPTIONS'
	);
	next();
});

app.use('/', require('./routes/users')); // user route
app.use('/auth', require('./routes/auth')); // google Oauth route
app.use('/rsvp', require('./routes/rsvp')); // RSVP route

const port = process.env.PORT || 5000;

connectDB();
app.set('port', port);

// For Heroku deployment
// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('frontend/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	});
}

app.listen(port, () => console.log(`server is on port ${port}`));
