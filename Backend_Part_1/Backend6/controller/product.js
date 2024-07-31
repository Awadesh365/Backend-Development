const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

exports.createProduct = (req, res) => {
  // Log the request body
  console.log(req.body);
  // Add the new product to the products array
  products.push(req.body);
  // Send a 201 status with the new product in the response body
  res.status(201).json(req.body);
};


exports.getAllProducts = (req, res) => {
  // Send a 200 status with the products array in the response body
  res.json(products);
};


exports.getProduct = (req, res) => {
  // Get the id from the request parameters
  const id = Number(req.params.id);
  // Find the product with the requested id
  const product = products.find((p) => p.id === id);
  // Send a 200 status with the product in the response body
  res.json(product);
};


exports.replaceProduct = (req, res) => {
  // Get the id from the request parameters
  const id = Number(req.params.id);
  // Find the index of the product with the requested id
  const productIndex = products.findIndex((p) => p.id === id);
  // Replace the product at the found index with the updated product
  products.splice(productIndex, 1, { ...req.body, id: id });
  // Send a 201 status with an empty response body
  res.status(201).json();
};


exports.updateProduct = (req, res) => {
  // Get the id from the request parameters
  const id = Number(req.params.id);
  // Find the index of the product with the requested id
  const productIndex = products.findIndex((p) => p.id === id);
  // Get the product at the found index
  const product = products[productIndex];
  // Update the product with the updated data
  products.splice(productIndex, 1, { ...product, ...req.body });
  // Send a 201 status with the updated product in the response body
  res.status(201).json();
};

exports.deleteProduct = (req, res) => {
  // Get the id from the request parameters
  const id = Number(req.params.id);
  // Find the index of the product with the requested id
  const productIndex = products.findIndex((p) => p.id === id);
  // Get the product at the found index
  const product = products[productIndex];
  // Remove the product from the products array
  products.splice(productIndex, 1);
  // Send a 201 status with the deleted product in the response body
  res.status(201).json(product);
};

