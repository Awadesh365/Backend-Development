import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


// middleware to handle errors and to get more comprehensive erros also to aviod writing the same code, it's written here.
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server Error"
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})


app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});




// by using async await

// const main = async () => {
//     await mongoose.connect(process.env.MONGO);
//     console.log("Monogdb connected through async/await");
// }
// main().catch((err) => {
//     console.log("not connected through async awit", err);
// })