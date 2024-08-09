import { Router } from "express";
import { loginUser, logOutUser, registerUser, refereshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"


const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

router.route("/login").post(
    loginUser
)

// secured routes
router.route("/logout").post(varifyJWT, logOutUser)
router.route("/refresh-token").post(refereshAccessToken)

export default router