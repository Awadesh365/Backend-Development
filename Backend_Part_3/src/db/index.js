
// require('dotenv').config();

import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


dotenv.config({
    path: "./env"
})

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/ ${DB_NAME}`)
        console.log(`\n MongoDB connected !!  DB Host : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB Connection error:", error);
        process.exit(1)
    }
}
export default connectDB;