// Importing necessary modules
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

// Reading index.html and data.json files
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

// Creating an instance of express
const server = express();

// Middleware configuration
// body parser for parsing JSON data
server.use(express.json());
// morgan for logging requests
server.use(morgan('default'));
// serving static files from public directory
server.use(express.static('public'));

// API Endpoint - Route Configuration

// Products
// API ROOT - base URL, example - google.com/api/v2/

// Create - POST /products - Create a new product
server.post('/products', (req, res) => {
    // Log the request body
    console.log(req.body);
    // Add the new product to the products array
    products.push(req.body);
    // Send the created product as a response with status code 201
    res.status(201).json(req.body);
});

// Read - GET /products - Get all products
server.get('/products', (req, res) => {
    // Send the products array as a response
    res.json(products);
});

// Read - GET /products/:id - Get a product by its id
server.get('/products/:id', (req, res) => {
    // Get the id from the request parameters
    const id = +req.params.id;
    // Find the product with the given id from the products array
    const product = products.find(p => p.id === id)
    // Send the product as a response
    res.json(product);
});

// Update - PUT /products/:id - Update a product by its id
server.put('/products/:id', (req, res) => {
    // Get the id from the request parameters
    const id = +req.params.id;
    // Find the index of the product with the given id in the products array
    const productIndex = products.findIndex(p => p.id === id)
    // Replace the product at the given index with the updated product
    products.splice(productIndex, 1, { ...req.body, id: id })
    // Send an empty response with status code 201
    res.status(201).json();
});

// Update - PATCH /products/:id - Update a product by its id
server.patch('/products/:id', (req, res) => {
    // Get the id from the request parameters
    const id = +req.params.id;
    // Find the index of the product with the given id in the products array
    const productIndex = products.findIndex(p => p.id === id)
    // Get the product at the given index
    const product = products[productIndex];
    // Replace the product at the given index with the updated product
    products.splice(productIndex, 1, { ...product, ...req.body })
    // Send an empty response with status code 201
    res.status(201).json();
});

// Delete - DELETE /products/:id - Delete a product by its id
server.delete('/products/:id', (req, res) => {
    // Get the id from the request parameters
    const id = +req.params.id;
    // Find the index of the product with the given id in the products array
    const productIndex = products.findIndex(p => p.id === id)
    // Get the product at the given index
    const product = products[productIndex];
    // Remove the product from the products array
    products.splice(productIndex, 1)
    // Send the deleted product as a response with status code 201
    res.status(201).json(product);
});


// Start the server on port 8080
server.listen(8080, () => {
    console.log('server started');
});
