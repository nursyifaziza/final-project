const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
// const ProductController = require('../controllers/productController');

router.get('/products/:videoId', productController.getProductList);

module.exports = router;