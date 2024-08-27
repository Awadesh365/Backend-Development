import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

// connect DB using Promesis
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.log("MongoDB Connection error", err);
    })

const app = express();

app.listen(3000, () => {
    console.log("server is running in port 3000");
})


// connect DB using async await 

// const connectDb = async () => {
//     try {
//         const db = await mongoose.connect(process.env.MONGO)
//         console.log("MongoDB connected");

//     } catch (error) {
//         console.log("MongoDB connection Error", error);
//     }
// }
// connectDb()