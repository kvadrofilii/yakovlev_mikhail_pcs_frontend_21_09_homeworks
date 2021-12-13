const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const router = Router();

// /api/auth/registration
router.post('/registration', async (req, res) => {
	try {

		const { email, password } = req.body;
		const candidate = await User.findOne({ email });

		if (candidate) {
			res.status(400).json({ massage: 'Такой пользователь уже существует' })
		}
		// hashed password
		const hashedPassword = await bcrypt.hash(password, 6);
		//create new User
		const user = new User({ email, password: hashedPassword, firstName, lastName, about, age, gender });
		//save to DB
		await user.save();

		res.status(201).json({ massage: 'Пользователь создан' });

	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так' });
	}
});

// /api/auth/login
router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		// user search 
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ message: 'Пользователь не найден' });
		}
		// decrypting the password
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ message: 'Неверный пароль' });
		}

		const token = jwt.sign(
			{ usedId: user.id },
			config.get('jwtSecret'),
			{ expiresIn: '1h' }
		)

		return res.json({ token, userId: user.id });

	} catch (e) {
		console.log(e)
		res.send({ message: "Server error" })
	}
});

module.exports = router;