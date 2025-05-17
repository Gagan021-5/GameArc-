import { handler } from "../utils/asynchandler.js";
import { User } from "../models/Userschema.js";


//generate access and all

const generatetoken = async (userId) => {
  const user = await User.findById(userId);
  const acctoken = await user.generateAccessToken();
  const reftoken = await user.generateRefreshToken();

  user.reftoken = reftoken;
  await user.save({ validateBeforeSave: false });

  return { reftoken, acctoken };
};

//Register 
export const registeruser = handler(async (req, res) => {
  const { fullname, username, email, password } = req.body;

  if (!fullname || !username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check if user already exists
  const present = await User.findOne({
    $or: [{ email }, { username }],
  });
  //if exist
  if (present) {
    return res.status(409).json({ error: "User already exists" });
  }
  //else create user or Register User 
  const created = await User.create({
    fullname,
    username: username.toLowerCase(),
    email,
    password,
  });

  const createduser = await User.findById(created._id).select(
    "-password -refreshToken"
  );

  if (!createduser) {
    return res.status(400).json({ error: "User was not created" });
  }
 
  //Token creation 
   const token = await generatetoken(createduser._id);

   //if Sucessfull send the msg
  res.status(201).json({
    message: "User registered successfully",
    user: createduser,
    token:token.acctoken
  });

});

//Login 
export const loginuser = handler(async (req, res) => {
  const { email, password } = req.body;


  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "User does not exist" });
  }

 
  const passvalid = await user.isPasswordCorrect(password);
  if (!passvalid) {
    return res.status(401).json({ error: "Incorrect Password" });
  }


  const { acctoken, reftoken } = await generatetoken(user._id);

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", acctoken, options)
    .cookie("refreshToken", reftoken, options)
    .json({
      message: "Login Successful!!",
      user,
      token: acctoken,
    });
});


//Logout 
export const logoutuser = handler(async (req, res) => {
   if(!req.user){
    res.status(404).json({error:"You are unauthorized user! "})
   }

  await User.findByIdAndUpdate(req.user._id, {
    $set: { refreshToken: undefined }
  });

  const options = {
    httpOnly: true,
    secure: true
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({ message: "Logged out successfully" });
});
