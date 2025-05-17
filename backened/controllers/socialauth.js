import admin from '../firebase.js';
import jwt from 'jsonwebtoken';
import { User } from '../models/Userschema.js';
import "dotenv/config";

export const oauthlogin = async (req, res) => {
  const { idToken } = req.body;

  try {

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { email, name, uid } = decodedToken;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        email,
        fullname: name,
        username: name,
        authProvider: 'firebase',
        firebaseUID: uid,
      });
    }

  
    const token = jwt.sign(
      { _id: user._id, email: user.email }, 
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({ token, user });
  } catch (error) {
    console.error("OAuth Login Error:", error);
    res.status(401).json({ message: 'Invalid token or login failed' });
  }
};
