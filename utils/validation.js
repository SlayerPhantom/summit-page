// checks to see if email is valid.
// Then checks if email is of the domain ubreakifix
function validateEmail(email) {
	const userEmail = email.trim();
	const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const errors = {};
	if (!regex.test(userEmail)) errors.email = 'Please provide a valid email';
	else if (!userEmail.endsWith('@ubreakifix.com'))
		errors.email = 'You are not allowed to register for the event';

	return { valid: Object.keys(errors).length < 1, errors };
}

exports.validateEmail = validateEmail;
