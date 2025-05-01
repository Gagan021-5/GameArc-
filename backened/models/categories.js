import mongoose from "mongoose";

const categorySchemma = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    }
},

    {timestamps: true}
)

export const Category = mongoose.model("category",categorySchemma)