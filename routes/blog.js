const express = require('express');
const router = express.Router();

const { blog, viewAll, reply, viewArticle } = require('../controllers/blog');

router.route('/register').post(blog);
router.route('/viewall').get(viewAll);
router.route('/view/:id').get(viewArticle);
router.route('/reply').post(reply);

module.exports = router;