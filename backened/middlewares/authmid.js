import { handler } from "../utils/asynchandler.js"
import jwt from "jsonwebtoken";
import { User } from "../models/Userschema.js";


export const verifyuser = handler(async (req, res, next) => {
  try{

    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", ""); //debugg takes 1hrr

    console.log("Token received:", token);

    if (!token) {
      return res.status(401).json({ message: "Unauthorized Access - No token provided" });
    }

    const check = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!check) {
      return res.status(401).json({ message: "Unauthorized Access - Invalid Token" });
    }

    const user = await User.findById(check?._id).select("-password -refreshToken");
    

    console.log("User from token:", user);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized Token - User not found" });
    }

    req.user = user; 
    next();
  } catch (error) {
    console.log("Error during token verification:", error);
    return res.status(401).json({ message: "Unauthorized Access: Invalid or expired token" });
  }
});
