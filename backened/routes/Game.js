import express from "express";
const gamerouter  = express.Router();
import { home } from "../controllers/gamecontroller.js";
import {rawg} from "../controllers/gamecontroller.js";
import { Gamedetails } from "../models/GameCard.js";



gamerouter.get("/",home);
gamerouter.get("/explore",rawg);


gamerouter.get("/:id", async (req, res) => {
  try {
    const gid = Number(req.params.id);
    const game = await Gamedetails.findOne({ id: gid });

    res.json(game);
    
  } catch (e) {
    console.log("Can't find the games:", e);
    res.status(500).json({ error: "Server error" });
  }
});



export default gamerouter;