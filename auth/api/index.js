import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
import userRouter from "./routes/user.route.js";

// connect DB using Promesis
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.log("MongoDB Connection error", err);
    })

const app = express();

app.use("/", userRouter)

app.listen(3000, () => {
    console.log("server is running in port 3000");
})