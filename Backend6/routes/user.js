/**
 * This module is responsible for setting up the routes for the user API.
 * It exports the router object that contains the routes.
 */

// Import the necessary modules
const express = require('express');
const userController = require('../controller/user');

// Create a new router object
const router = express.Router();

// Set up the routes for the user API
router
  // POST /: Create a new user
  .post('/', userController.createUser)
  // GET /: Get all users
  .get('/', userController.getAllUsers)
  // GET /:id: Get a specific user by id
  .get('/:id', userController.getUser)
  // PUT /:id: Replace a user by id
  .put('/:id', userController.replaceUser)
  // PATCH /:id: Update a user by id
  .patch('/:id', userController.updateUser)
  // DELETE /:id: Delete a user by id
  .delete('/:id', userController.deleteUser);

// Export the router object
exports.router = router;
