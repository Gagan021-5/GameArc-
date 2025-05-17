import mongoose from "mongoose";
import 'dotenv/config';
import { DB_NAME } from "../utils/constant.js";
import store from "../utils/gamestore.js";


const connection =async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        await store();
        console.log("Connection done!!");
        
    
    }
    catch(e){
        console.log("Error occured",e);
        
    }
}

export default connection;