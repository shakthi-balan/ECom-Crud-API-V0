const express = require('express');
const Product = require("./product.model.js");
const router = express.Router();

const { postProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('./product.controller');

//get all products
router.get('/', getProducts);

//get single product By ID
router.get('/:id', getProductById);

//Post a new product 
router.post('/', postProduct);

//Update an existing product 
router.put('/:id', updateProduct);

//Delete a product
router.delete('./:id', deleteProduct)
module.exports = router;