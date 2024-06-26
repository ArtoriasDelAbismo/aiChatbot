import { Router } from "express";
import { getAllUsers, userLogin, userSignup } from "./controllers/userControllers.js";
import { validate, signupValidator, loginValidator } from "./utils/validator.js"
const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);


export default userRoutes;