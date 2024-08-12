const fs = require('fs');
const express = require('express');

//------------------only for file system--------------------
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;
// -----------------------------------

const morgan = require('morgan')

const server = express();


// will read json type body  (will be enabled) [body parser previously known]
server.use(express.json())

// server.use(express.urlencoded())
// server.use(morgan("default"))
server.use(express.static('public'))


// API - Endpoint  - Route

// Products

// API ROOT, base URL, eg: google.com/api/v2


// Create: POST  /products
server.post("/products", (req, res) => {
  console.log(req.body);

  products.push(req.body);
  res
    .status(201)
    .send(req.body)
})


// Read:  GET/products
server.get("/products", (req, res) => {
  res.json(products)
})


// Read:  GET/products/:id
server.get("/products/:id", (req, res) => {
  const id = +req.params.id;

  console.log(req.body)
  const product = products.find(p => p.id === id)

  res.json(product)
})


// Update
// PUT /products/:id    (Overwright)
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;

  console.log(req.body)

  const productIndex = products.findIndex(p => p.id === id)

  products.splice(productIndex, 1, { ...req.body, id: id })

  res.status(201).json()
})

// PATCH /products/:id
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;

  console.log(req.body);

  const productIndex = products.findIndex(p => p.id === id)

  const product = products[productIndex];

  products.splice(productIndex, 1, { ...product, ...req.body, id: id })

  res.status(201).json()

})

// delete DELETE 
// /products/:id
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;

  const productIndex = products.findIndex(p => p.id === id)

  const product = products[productIndex]

  products.splice(productIndex, 1)

  res.status(201).json(product)
})


server.listen(8080, (req, res) => {
  console.log("server is running");

})
