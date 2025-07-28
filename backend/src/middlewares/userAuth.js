import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const userAuth = async (req, res, next) => {
  try {
    const cookie = req.cookies;
    if (!cookie) {
      console.log("ERROR : COOKIE NOT FOUND");
      return res.status(401).json({ message: "Authentication cookie missing" });
    }
    const { token } = cookie;
    if (!token) {
      console.log("ERROR : TOKEN NOT FOUND");
      console.log(cookie);
      console.log("hi");
      return res.status(401).json({ message: "Authentication token missing" });
    }

    const decoded = jwt.verify(token, "UniSwap@5460");
    const { _id } = decoded;
    const user = await User.findOne({ _id });
    if (!user) {
      throw new Error("User Not Found");
    }
    // console.log(user);
    req.user = user;
    next();
  } catch (error) {
    console.log(
      "ERROR : USER AUTHENTICATION FAILED AT MIDDLEWARE",
      error.message
    );
    res.status(400).json({ message: "User Authentication Failed" });
  }
};
