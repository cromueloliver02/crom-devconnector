const mongoose = require('mongoose');

<<<<<<< HEAD
const connectDB = async () => {
=======
const ConnectDB = async () => {
>>>>>>> 8517ab5f88ad2b287354cc5113e9cc6d076bf5b5
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		});

<<<<<<< HEAD
		console.log('MongoDB connected...');
	} catch (err) {
		console.err(err.message);
=======
		console.log('MongoDB connected');
	} catch (err) {
		console.log(err.message);
>>>>>>> 8517ab5f88ad2b287354cc5113e9cc6d076bf5b5
		process.exit(1);
	}
};

<<<<<<< HEAD
module.exports = connectDB;
=======
module.exports = ConnectDB;
>>>>>>> 8517ab5f88ad2b287354cc5113e9cc6d076bf5b5
