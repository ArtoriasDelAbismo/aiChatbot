import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import { hash, compare } from "bcrypt";


async function getAllUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await User.find();
    return res.status(200).json({ message: "OK", users });
  } catch (error) {
    console.log(error);

    return res.status(404).json({ message: "Not Found", cause: error.message });
  }
}

async function userSignup (req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email })
    if(existingUser) return res.status(401).send("User already registered");
    const hashedPassword = await hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    return res.status(200).json({ message: "OK", id: user._id.toString() });
  } catch (error) {
    console.log(error);

    return res.status(200).json({ message: "Not Found", cause: error.message });
  }
}

async function userLogin (req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(401).send("User not registered");
    const isPasswordCorrect = await compare(password, user.password);
    if(!isPasswordCorrect) return res.status(403).send("Incorrect Password")
    
    return res.status(200).json({ message: "OK", id: user._id.toString() });
  } catch (error) {
    console.log(error);

    return res.status(200).json({ message: "Not Found", cause: error.message });
  }
}

export { getAllUsers, userSignup, userLogin };
