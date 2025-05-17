import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();



//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//Routing
import gamerouter from "../routes/Game.js";
import userrouter from "../routes/auth.js";
import paymentroute from "../routes/payment.js";
import libroute from "../routes/Purchasedgame.js";

app.use("/api/game", gamerouter); //prefix
app.use("/api/users", userrouter);
app.use("/api/game/cart", paymentroute);
app.use("/api/game/my", libroute);
app.use("/api/users", userrouter);

export { app };
