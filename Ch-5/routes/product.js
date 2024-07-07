const express = require('express');
const productController = require('../controller/product');

/**
 * This module is responsible for setting up the routes for the product API.
 * It exports the router object that contains the routes.
 */

// Create a new router object
const router = express.Router();

/**
 * Set up the routes for the product API.
 * - POST /: Create a new product
 * - GET /: Get all products
 * - GET /:id: Get a specific product by id
 * - PUT /:id: Replace a product by id
 * - PATCH /:id: Update a product by id
 * - DELETE /:id: Delete a product by id
 */

router
  .post('/', productController.createProduct) // Create a new product
  .get('/', productController.getAllProducts) // Get all products
  .get('/:id', productController.getProduct) // Get a specific product by id
  .put('/:id', productController.replaceProduct) // Replace a product by id
  .patch('/:id', productController.updateProduct) // Update a product by id
  .delete('/:id', productController.deleteProduct); // Delete a product by id

// Export the router object
exports.router = router;  
