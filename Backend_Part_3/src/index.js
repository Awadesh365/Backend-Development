import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"



connectDB();



/*
import express from "express"
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI} /${DB_NAME}`)

        // incase the app of express is able to communicate
        app.on("error: ", (error) => {
            console.log("ERRR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("ERROR:", error)
        throw error
    }
})
*/