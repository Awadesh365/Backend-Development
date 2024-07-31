require('dotenv').config()
const express = require('express');

const mongoose = require('mongoose');

const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://awadesh:awadesh@awadesh.ckymuy1.mongodb.net/?retryWrites=true&w=majority&appName=awadesh');
  console.log('database connected')
}



//bodyParser
server.use(express.json());
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);




server.listen(8080, () => {
  console.log('server started');
});
