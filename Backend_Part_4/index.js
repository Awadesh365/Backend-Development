const express = require('express');
const productRouter = require("./routes/product.route.js")
const userRouter = require("./routes/user.route.js")

const morgan = require('morgan')

const server = express();


// will read json type body  (will be enabled) [body parser previously known]
server.use(express.json())

// server.use(express.urlencoded())
// server.use(morgan("default"))
server.use(express.static('public'))

// middleware to attach the router to server
server.use("/products", productRouter.router)
server.use("/users", userRouter.router)


server.listen(8080, (req, res) => {
  console.log("server is running");

})
