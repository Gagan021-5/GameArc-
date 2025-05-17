import allgames from "../models/Game.js";
import { Gamedetails } from "../models/GameCard.js";


const store = async()=>{
    try{
       const count =  await Gamedetails.countDocuments();
       if(count==0){
        await Gamedetails.insertMany(allgames);
        console.log("The game is inserted 🦖");
        
       }
    }
    catch(error){
        console.log("Cannot inserted!",error);
    }

    

};

export default store;