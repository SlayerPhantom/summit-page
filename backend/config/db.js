// database connection
const { connect } = require('mongoose');

// need to make DB before implementing this function
const connectDB = async () => {
	try {
		await connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB connected');
	} catch (e) {
		console.error(e);
	}
};

exports.connectDB = connectDB;
