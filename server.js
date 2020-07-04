const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const consign = require('consign');
const fs = require('fs');

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', process.env.PORT);

app.use(express.static(path.join(__dirname, '/dist')));

app.use((req, res, next) => {
	console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);

	return next();
});

app.get('/serviceworker.js', (req, res) => {
	var lstFiles = [];

	fs.readdirSync('./dist/assets/js').forEach((file) => {
		lstFiles.push(`baseURL + '/assets/js/${file}'`);
	});

	fs.readFile('./static/serviceworker.js', (err, data) => {
		if (err) return res.status(501).send(err);

		var strData = data
			.toString()
			.replace('$APP_VERSION', `4fao-v${process.env.APP_VERSION}`)
			.replace('$FILES_URL', lstFiles.join(', '));

		res.status(200).type('.js').send(strData);
	});
});

app.get('/manifest.json', (req, res) => {
	fs.readFile('./static/manifest.json', (err, data) => {
		if (err) return res.status(501).send(err);

		var strData = data.toString();

		res.status(200).type('.json').send(strData);
	});
});

consign().include('routes').then('api').into(app);

app.listen(app.get('port'), () => {
	console.log('\nServer up\n\n');
});
