const express = require('express');
const { getData, createData } = require('../controllers/dataController');
const router = express.Router();

router.route('/').get(getData).post(createData);

module.exports = router;
