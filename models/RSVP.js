// RSVP DB model
const { model, Schema } = require('mongoose');

const rsvpSchema = new Schema({
	email: String,
	firstName: String,
	lastName: String,
	googleId: String,
});

module.exports = model('rsvp', rsvpSchema);
