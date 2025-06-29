import jwt from "jsonwebtoken";

export const userAuth=async(req,res,next)=>{
    try {
        const cookie= req.cookies;
        const {token}= cookie;
        const decoded= jwt.verify(token,"UniSwap@5460")
        const {userId}= decoded;
        const user = await user.findOne({_id:userId});
        if (!user) {
            throw new Error("User Not Found");
        }
        req.user=user;
        next();
    } catch (error) {
        console.log("ERROR : USER AUTHENTICATION FAILED AT MIDDLEWARE", error.message);
        res.status(400).json({ message: "User Authentication Failed" });
    }
}