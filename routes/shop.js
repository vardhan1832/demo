const express = require('express')
const router = express.Router();
const products = require('../controller/products');

router.get('/',products.getShop)

module.exports = router;