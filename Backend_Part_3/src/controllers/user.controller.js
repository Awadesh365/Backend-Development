import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"


const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation -> not empty
    // check if user already exists (username, email)
    // check for images, check for avatar
    // upload them cloudnary, avatar
    // create user object - create entry in DB
    // remove password referesh tocken feild from response.
    // check for user creation
    // return response.

    const { fullName, email, username, password } = req.body
    console.log("email:", email);

    if (fullName === "" || username === "" || email === "" || password === "") {
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = User.findOne(
        {
            $or: [{ username }, { email }]
        }
    )


    if (existedUser) {
        throw new ApiError(409, "User with email or urnder already exists")
    }

    // multer
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required");
    }

    const user = await User.create({
        fullName: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const isCreatedUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!isCreatedUser) {
        throw new ApiError(500, "Somthing went wrong while registering user");
    }

    return res.status(201).json(
        new ApiResponse(200, isCreatedUser, "User is Registerd Successfully")
    )


})


export {
    registerUser,
}