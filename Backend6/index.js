/**
 * This module sets up an Express server and configures it to serve static files
 * from the 'public' directory. It also sets up two routers for the '/products'
 * and '/users' routes, which are handled by the 'productRouter' and 'userRouter'
 * modules respectively.
 */



// Import necessary modules
require('dotenv').config();
const express = require('express'); // Import the Express framework
const morgan = require('morgan'); // Import the Morgan logger middleware
const server = express(); // Create a new Express server instance

console.log("env", process.env.DB_PASSWORD)

// Import routers for products and users
const productRouter = require('./routes/product'); // Import the product router
const userRouter = require('./routes/user'); // Import the user router

// Middleware configuration
// 1. Parse incoming requests with JSON payloads
server.use(express.json());
// 2. Log requests using Morgan logger middleware
server.use(morgan('default'));
// 3. Serve static files from the 'public' directory
server.use(express.static(process.env.PUBLIC_DIR));
// 4. Define routes for products and users
server.use('/products', productRouter.router); // Use the product router for '/products' routes
server.use('/users', userRouter.router); // Use the user router for '/users' routes






// Start the server on port 8080
server.listen(process.env.PORT, () => {
  console.log('Server started on port 8080');
});