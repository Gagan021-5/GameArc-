import express, { json } from "express";
import Stripe from "stripe";
import "dotenv/config";
import { verifyuser } from "../middlewares/authmid.js";
const paymentroute = express.Router();
import { User } from "../models/Userschema.js";
import { Gamedetails } from "../models/GameCard.js";
const stripe = new Stripe(process.env.STRIPE_KEY);

paymentroute.post("/checkout", verifyuser, async (req, res) => {
  const { cartitems } = req.body;

  const list_items = cartitems.map((items) => ({
    price_data: {
      currency: "usd",

      product_data: {
        name: items.name,
      },

  unit_amount: Math.round(items.price * 100),
    },
    quantity: 1,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: list_items,
      success_url: "https://gamearc-frontend2.onrender.com/success",
      cancel_url: "https://gamearc-frontend2.onrender.com/cart",
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(402).json({ error: "Payment Failed due to server error." });
  }
});
export default paymentroute;
