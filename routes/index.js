const express = require('express');
const router = express.Router();

const fs = require('fs');

const HomeController = {};

HomeController.get = (req, res) => {
	fs.readFile('./dist/template.html', (err, data) => {
		if (err) return res.status(501).send(err);

		res.send(data.toString().replace(/\%PUBLIC\_PATH\%/g, process.env.HOST));
	});
};

module.exports = (app) => {
	router.get('/', HomeController.get);
	router.get('/login', HomeController.get);
	router.get('/account', HomeController.get);

	app.use(router);

	return this;
};
