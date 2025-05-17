import mongoose from "mongoose";
const gameSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    url: { type: String, required: true }, // main image 
    brief_description: { type: String, required: true },
    long_description: { type: String, required: true },
    youtube: { type: String, required: true }, 
    genre: { type: String, required: true },
    discount: { type: Number, default: 0 },
    platforms: [{ type: String }], 
    rating: { type: Number, min: 0, max: 5 },
    tags: [{ type: String }],
    developer: { type: String },
    publisher: { type: String },
    screenshots: [{ type: String }] 
});

export  const Gamedetails = mongoose.model("Game", gameSchema);
