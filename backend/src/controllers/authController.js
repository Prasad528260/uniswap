import { validateSignup } from "../utils/validate.js";
import User from "../models/user.js";
import { userAuth } from "../middlewares/userAuth.js";

import bcrypt from "bcrypt";

// * Signup
export const signupController = async (req, res, next) => {
  const { firstName, lastName, email, password, department } = req.body;

  const isValid = validateSignup(
    firstName,
    lastName,
    email,
    password,
    department
  );
  if (!isValid) {
    console.log("ERROR : SIGNUP VALIDATION FAILED");
    throw new Error("Validation Failed");
  }
  const hashedPassword = await bcrypt.hash(password, 8);
  const user = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    department,
  });
  try {
    const savedUser = await user.save();
    const token = await savedUser.getJWT();
    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
    });
    console.log("User created successfully");
    res.status(201).json(user);
  } catch (e) {
    console.log("ERROR : USER NOT CREATED", e.message);
    res.status(400).json({ message: "User Not Created" });
  }
};

// * Login
export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid Credentials");
    }
    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      throw new Error("Invalid Credentials");
    } else {
      const token = await user.getJWT();
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.json(user);
    }
  } catch (e) {
    console.log("ERROR : LOGIN FAILED", e.message);
    res.status(400).json({ message: "Login Failed" });
  }
};

// * Logout
export const logoutController = (req, res, next) => {
  // const cookie= req.cookies;
  // cookie.clearCookies("token")
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.json({ message: "Logout successful" });
};
