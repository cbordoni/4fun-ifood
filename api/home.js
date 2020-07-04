const express = require('express');
const router = express.Router();

const HomeController = {};

const data = [
	{ name: 'Açaí', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-acai.jpg' },
	{
		name: 'Doces & Bolos',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-doces-e-bolos.jpg',
	},
	{
		name: 'Salgados',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-salgados.jpg',
	},
	{ name: 'Pastel', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-pasteis.jpg' },
	{
		name: 'Sorvetes',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-sorvetes.jpg',
	},
	{ name: 'Padarias', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-padaria.jpg' },
	{
		name: 'Brasileira',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-brasileira-v2.jpg',
	},
	{
		name: 'Saudável',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-saudavel-v2.jpg',
	},
	{ name: 'Bebidas', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-bebidas.jpg' },
	{ name: 'Pizza', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-pizza.jpg' },
	{
		name: 'Vegetariana',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-vegetariana.jpg',
	},
	{
		name: 'Mercado',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/mercado_amareclo.png',
	},
	{ name: 'Promoções', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/Promo_cat.png' },
	{ name: 'Açaí', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-acai.jpg' },
	{
		name: 'Doces & Bolos',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-doces-e-bolos.jpg',
	},
	{
		name: 'Salgados',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-salgados.jpg',
	},
	{ name: 'Pastel', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-pasteis.jpg' },
	{
		name: 'Sorvetes',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-sorvetes.jpg',
	},
	{ name: 'Padarias', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-padaria.jpg' },
	{
		name: 'Brasileira',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-brasileira-v2.jpg',
	},
	{
		name: 'Saudável',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-saudavel-v2.jpg',
	},
	{ name: 'Bebidas', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-bebidas.jpg' },
	{ name: 'Pizza', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-pizza.jpg' },
	{
		name: 'Vegetariana',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-vegetariana.jpg',
	},
	{
		name: 'Mercado',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/mercado_amareclo.png',
	},
	{ name: 'Promoções', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/Promo_cat.png' },
	{ name: 'Açaí', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-acai.jpg' },
	{
		name: 'Doces & Bolos',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-doces-e-bolos.jpg',
	},
	{
		name: 'Salgados',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-salgados.jpg',
	},
	{ name: 'Pastel', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-pasteis.jpg' },
	{
		name: 'Sorvetes',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-sorvetes.jpg',
	},
	{ name: 'Padarias', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-padaria.jpg' },
	{
		name: 'Brasileira',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-brasileira-v2.jpg',
	},
	{
		name: 'Saudável',
		img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-saudavel-v2.jpg',
	},
	{ name: 'Bebidas', img: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-bebidas.jpg' },
];

HomeController.post = (req, res) => {
	res.status(200).json({ code: 1, message: 'Success', data });
};

module.exports = (app) => {
	router.get('/', HomeController.post);

	app.use('/api/home', router);

	return this;
};
