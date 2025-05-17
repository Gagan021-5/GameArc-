import { Router } from "express";
import {
  loginuser,
  registeruser,
  logoutuser,
} from "../controllers/usercontrol.js";
const userrouter = Router();
import { verifyuser } from "../middlewares/authmid.js";
import { oauthlogin } from "../controllers/socialauth.js";



userrouter.route("/register").post(registeruser); //taking back the user to the registeration
userrouter.route("/login").post(loginuser); //taking back the user to the login if registered
userrouter.route("/logout").post(verifyuser, logoutuser); //checkinng middlware and then  logout
userrouter.route("/me").get(verifyuser, (req, res) => {
  //the user end point
  res.status(200).json(req.user);
});
userrouter.route("/oauthlogin").post(oauthlogin);

export default userrouter;
