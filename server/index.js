const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
const PORT = config.get('serverPort');
const corsMiddleware = require('./middleware/cors.middleware.js');

app.use(corsMiddleware);
app.use(express.json())
app.use('/api/auth', require('./routes/auth.routers.js'));

async function start() {
	try {
		await mongoose.connect(config.get('dbUrl'), {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		app.listen(PORT, () => console.log('Server started on port ', PORT));
	} catch (e) {
		console.log('Server Error:', e.message);
		process.exit(1);
	}
}

start();