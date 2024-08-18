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