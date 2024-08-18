import dotenv from "dotenv"
import mongoose from "mongoose"
import express from "express"
dotenv.config();

import userRouter from "./routes/user.route.js"

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("mongodb connected");

    })
    .catch((err) => {
        console.log("not connected", err)
    })

const app = express();

app.use("/api/user", userRouter)

app.listen(3000, () => {
    console.log("server is running on Port 3000");
})




// by using async await

// const main = async () => {
//     await mongoose.connect(process.env.MONGO);
//     console.log("Monogdb connected through async/await");
// }
// main().catch((err) => {
//     console.log("not connected through async awit", err);
// })