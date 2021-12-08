const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const router = Router();

// /api/auth/register
router.post('/register', async (req, res) => {
	try {

		const { email, password } = req.body;
		const candidate = await User.findOne({ email });

		if (candidate) {
			res.status(400).json({ massage: 'Такой пользователь уже существует' })
		}

		const hashedPassword = await bcrypt.hash(password);
		const user = new User({ email, password: hashedPassword });

		await user.save();

		res.status(201).json({ massage: 'Пользователь создан' });

	} catch (e) {
		res.status(500).json({ message: 'Что-то пошло не так' });
	}
});

// /api/auth/login
router.post('/login', async (req, res) => {

	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (!user) {
		return res.status(400).json({ message: 'Пользователь не найден' });
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		return res.status(400).json({ message: 'Неверный пароль' });
	}

	const token = jwt.sign(
		{ usedId: user.id },
		config.get('jwtSecret'),
		{ expiresIn: '1h' }
	)

	res.json({ token, userId: user.id });

});

module.exports = router;