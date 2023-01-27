const express = require('express');
const router = express.Router();

const { testEmail } = require('../controllers/emails');

router.route('/test').post(testEmail);

module.exports = router;

