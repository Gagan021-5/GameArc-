import mongoose from "mongoose";

const gameschema = new mongoose.Schema({}.dictionary,
    
    
    {timestamps:true});

export const Product = mongoose.model("gamecard",gameschema);