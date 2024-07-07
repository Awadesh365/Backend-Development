// Import necessary modules
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

// Read index.html and data.json files
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

// Create an instance of express
const server = express();

// Middleware configuration
// body parser for parsing JSON data
server.use(express.json());
// morgan for logging requests
server.use(morgan('default'));
// serving static files from public directory
server.use(express.static('public'));


const auth = (req, res, next) => {
    // Pass on the request to the next middleware function
    next();
};

// API - Endpoint - Route

// Get a product by its id
server.get('/product/:id', auth, (req, res) => {
    console.log(req.params);
    res.json({ type: 'GET' });
});

// Create a new product
server.post('/', auth, (req, res) => {
    res.json({ type: 'POST' });
});

// Update a product
server.put('/', (req, res) => {
    res.json({ type: 'PUT' });
});

// Delete a product
server.delete('/', (req, res) => {
    res.json({ type: 'DELETE' });
});

// Patch a product
server.patch('/', (req, res) => {
    res.json({ type: 'PATCH' });
});

// Demo endpoint
server.get('/demo', (req, res) => {
    // res.sendStatus(404);
    // res.json(products)
    // res.status(201).send('<h1>hello</h1>')
    // res.sendFile('/Users/abhishekrathore/Desktop/node-app/index.html')
});

// Start the server on port 8080
server.listen(8080, () => {
    console.log('server started');
});
