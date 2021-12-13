const { Schema, model } = require('mongoose');

const schema = new Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	avatar: { type: String },
	firstname: { type: String },
	lastname: { type: String },
	about: { type: String },
	age: { type: Number },
	gender: { type: String }
});

module.exports = model('User', schema);