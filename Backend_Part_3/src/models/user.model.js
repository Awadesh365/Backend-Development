import mongoose, { Schema } from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // cloudinary url
        required: true,
    },
    coverImage: {
        type: String // cloudinary url
    },
    watchHistory: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, "Password is Required"]
    },
    refreshToken: {
        type: String
    }

}, { timestamps: true });

// logic for password encryption when password is saved
// make sure you don't use arrow function as it does not have access to 'this' keyword
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
})

// logic for checking the password wheather it is correct or not when it user will put the password.
// 'methods' give us the functionlity to create our own functions; make sure 'isPasswordCorrect' is our own defined function.
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password); // true or false
    // (password given by user, encrypted password)
}

// logic for checking the password wheather it is correct or not when it user will put the password.
// 'methods' give us the functionlity to create our own functions; make sure 'generateAccessToken' is our own defined function.
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

// logic for checking the password wheather it is correct or not when it user will put the password.
// 'methods' give us the functionlity to create our own functions; make sure 'generateRefereshToken' is our own defined function.
userSchema.methods.generateRefereshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);