const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

const LoginController = {};

LoginController.post = (req, res) => {
	const { strLogin, strPwd } = req.body;

	if (strLogin == 'admin' && strPwd == 'admin') {
		const user = {
			_id: new Date().getTime(),
			strFisrtName: 'Sys Admin',
			strLogin,
			roles: ['Sys Admin'],
		};

		var token = jwt.sign({ id: user._id }, process.env.JWR_SECRET, {
			expiresIn: 3600,
		});

		return res.json({ auth: true, user: user, token: token });
	}

	res.status(200).json({ auth: false, message: 'User not found' });
};

LoginController.verifyJWT = (req, res, next) => {
	var strToken = req.headers['Authorization'].replace('Bearer ', '');

	if (!strToken) return res.status(401).json({ auth: false, message: 'No token provided.' });

	jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
		if (err) return res.status(403).json({ auth: false, message: 'Failed to authenticate token.' });

		req.idUser = data.id;

		next();
	});
};

module.exports = (app) => {
	router.post('/', LoginController.post);

	app.use('/api/login', router);

	return this;
};

module.exports.LoginController = LoginController;
