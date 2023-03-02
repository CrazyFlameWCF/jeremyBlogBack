const express = require('express');
const router = express.Router();

const { blog, viewAll, reply } = require('../controllers/blog');

router.route('/register').post(blog);
router.route('/viewall').get(viewAll);
router.route('/reply').post(reply);

module.exports = router;