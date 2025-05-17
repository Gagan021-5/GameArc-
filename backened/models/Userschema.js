
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: function () {
        //if not using Firebase
        return !this.firebaseUID;
      },
    },
    firebaseUID: {
      type: String,
    },
    purchased: [
      {
        gameimg: { type: String, required: true },
        gameName: { type: String, required: true },
        genre: { type: String, required: true },
        gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
        purchaseDate: { type: Date, default: Date.now },
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// 🔐 Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10); // you missed `await`
  next();
});

userSchema.methods.isPasswordCorrect = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

// 🔐 Access Token Generator
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

/// 🔐 Refresh Token Generator
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
