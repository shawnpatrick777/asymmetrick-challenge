const express = require('express');

const homePage = require('../pages/home');
const snowPage = require('../pages/snow');
const rainPage = require('../pages/rain');

const router = express.Router();

router.get('/', (req, res) => {
	res.send(homePage({ req }));
});
router.get('/winter-is-coming', (req, res) => {
	res.send(snowPage({ req }));
});
router.get('/blame-it-on-the-rain', (req, res) => {
	res.send(rainPage({ req }));
});

module.exports = router;
