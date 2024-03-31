const express = require('express')
const router = express.Router();
const ProductController = require('../controllers/product')

router.get('/',ProductController.showAll);
router.post('/createPro',ProductController.create);

module.exports = router