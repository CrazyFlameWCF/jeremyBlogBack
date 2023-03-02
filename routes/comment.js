const express = require('express');
const router = express.Router();

const { registerComment } = require('../controllers/comment');

router.route('/register').post(registerComment);

module.exports = router;