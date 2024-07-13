const express = require('express');
const { getIntelligence, createIntelligence } = require('../controllers/intelligenceController');
const router = express.Router();

router.route('/').get(getIntelligence).post(createIntelligence);

module.exports = router;
