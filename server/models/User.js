const { Schema, model } = require('mongoose');

const schema = new Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	avatar: { type: String },
	files: [{ type: ObjectId, ref: 'File' }]
});

module.exports = model('User', schema);