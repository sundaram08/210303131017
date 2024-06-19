
const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productControl');

router.get('/:categoryname/products', getProducts);

module.exports = router;