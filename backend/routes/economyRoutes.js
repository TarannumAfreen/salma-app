const express = require('express');
const { getEconomy, createEconomy } = require('../controllers/economyController');
const router = express.Router();

router.route('/').get(getEconomy).post(createEconomy);

module.exports = router;
