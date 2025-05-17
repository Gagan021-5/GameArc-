//for rawg api
import "dotenv/config";
import { Gamedetails } from "../models/GameCard.js";
export const rawg = async (req, res) => {
  let page1 = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API}&page=1&page_size=40`
  );
  let page2 = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API}&page=2&page_size=40`
  );
  let page3 = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API}&page=3&page_size=40`
  );
  let response1 = await page1.json();
  let response2  = await page2.json();
  let response3 = await page3.json();
   const combine= [...response1.results,...response2.results,...response3.results];    //spreaded the keys 
   res.send(combine);
};

//list of all games
export const home = async (req, res) => {
  let homepage = await Gamedetails.find();
  let data =  res.json(homepage);
};

