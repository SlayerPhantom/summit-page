const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config({ path: './config/config.env' });

const app = express();

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
app.listen(port, () => console.log(`server is on port ${port}`));
