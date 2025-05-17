import express from "express";
import { verifyuser } from "../middlewares/authmid.js";
import { User } from "../models/Userschema.js";

const libroute = express.Router();

//  user library
libroute.get("/collection", verifyuser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("purchased.gameId"); //

    return res.json({ purchased: user?.purchased || [] });
  } catch (err) {
    console.error("Error loading library:", err);
    return res.status(500).json({ error: "Could not load purchased games." });
  }
});
libroute.post("/collection/purchase", verifyuser, async (req, res) => {
  const { gameId, gameName, gameimg, genre } = req.body;

  if (!gameId || !gameName || !gameimg || !genre) {
    return res.status(400).json({ error: "Missing purchase information." });
  }

  try {
 
    const user = await User.findById(req.user.id);

    
    const alreadyPurchased = user.purchased.some(
      (item) => item.gameId.toString() === gameId
    );

    if (alreadyPurchased) {
      return res.status(200).json({ message: "Game already in library." });
    }

    user.purchased.push({
      gameId,
      gameName,
      gameimg,
      genre,
      purchaseDate: new Date(),
    });

    await user.save();

    return res.json({ purchased: user.purchased });
  } catch (err) {
    console.error("Error recording purchase:", err);
    return res.status(500).json({ error: "Could not save purchase." });
  }
});

export default libroute;
