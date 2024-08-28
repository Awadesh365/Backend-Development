import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"


mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.log("MongoDB Connection error", err);
    })

const app = express();
app.use(express.json())

app.use("/api/user", userRouter)

app.use("/api/auth", authRouter)

app.listen(3000, () => {
    console.log("server is running in port 3000");
})