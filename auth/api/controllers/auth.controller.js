import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const signUp = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        res
            .status(201)
            .json({ message: "user Created Successfully" })
    } catch (error) {
        next(error)
    }
}

export const signIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const validUser = await User.findOne({ email })
        if (!validUser) return next(errorHandler(404, "invalid credentials"))
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(404), "invalid credentials")

        const { password: hashedPassword, ...rest } = validUser._doc; // this line will not let password go the client side.

        // Jwt Auth: Token combination of unique identifiers of a user, and then we add it to the cookie of the browser.
        // also when backend respond it checks the token each time and not ask for email and passwowrd each time.
        // as _id created by mongodb will be always unique so it is used to create the token.
        // token are created by _id in most of the cases due to security reasons, as with email and username there might be a case that someone will create a token.
        // the token is combination of the _id and the  JWT_SECTRET you give, if you'll change the JWT_SECRET the tocken will be changed.
        // if we do not add expiryDate, then the token will be for a session, which means when a user will close brwoser or tab he needs to lgoin again.

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); // step 1
        const expiryDate = new Date(Date.now() + 3600000); // 1 Hour
        res.cookie("access_token", token, { httpOnly: true, expires: expiryDate }) // step 2
            .status(200)
            .json(validUser)
    } catch (error) {
        next(error)
    }
}
