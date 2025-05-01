import React from "react";
import { useParams } from "react-router-dom";
import allgames from "../components/games";
import Foot from "../components/Foot";
import { useState, useEffect } from "react";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";
const Game = () => {
  const [data, setdata] = useState(allgames);

  const params = useParams();

  return (
    <>
     
      <div className="min-h-screen w-full bg-gray-900 flex justify-center">
        <div className="min-h-[70%] h-auto w-full grid grid-cols-2  ">
          {/* section of grid */}
          <div className="w-full h-auto  flex justify-center items-center p-5 flex-col shadow-2xl rounded-xl ">
            <div className="w-full h-full flex flex-col space-y-10 p-4 ">
              <h1 className="text-white text-4xl  font-extrabold  ">
                Last of Us Part 2
              </h1>
              <div className="w-full flex gap-4">
                <span className="text-white text-lg">⭐ 4.6</span>
                <p className="text-gray-400 text-md my-auto">
                  
                  🎨Inclusive Character Customization
                </p>
                <p className="text-gray-400 text-mdmy-auto">
                  🦖 Great Boss Battles
                </p>
              </div>

              {/* video */}
              <div className="h-90 w-auto  ">
                <iframe
                  className="rounded-xl w-[95%] h-full shadow-xl"
                  src="https://www.youtube.com/embed/vhII1qlcZ4E?si=bDGBqn9QwUgMu-zb"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              {/* images */}
              <div className="images h-70 w-full flex justify-between p-2">
                <div className="h-auto w-[30%]  ">
                  <img
                    src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/ss_ec1a71230d4fb477282fa7f25688af37b702ce49.1920x1080.jpg?t=1741209545"
                    alt="img"
                    className="object-contain h-full w-full rounded-xl opacity-80 transition duration-200 ease-in-out  hover:opacity-100  cursor-pointer" 
                  />
                </div>
                <div className="h-auto w-[30%]  ">
                  <img
                    src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/ss_98b476104b239764ba2a3280b1a9e09a24701041.1920x1080.jpg?t=1741209545"
                    alt="img"
                    className="object-contain h-full w-full rounded-xl opacity-80 transition duration-200   ease-in-out  hover:opacity-100 cursor-pointer"
                  />
                </div>
                <div className="h-auto w-[30%]">
                  <img
                    src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/ss_8cd55ab975b2e47f4d4d9a0da4ae6948040ef807.600x338.jpg?t=1741209545"
                    alt="img"
                    className="object-contain h-full w-full rounded-xl  opacity-80 transition duration-200   ease-in-out  hover:opacity-100 cursor-pointer"
                  />
                </div>
              </div>
              {/* about the game */}
              <div className="w-full space-y-4">
                <h1 className="text-white text-3xl font-bold">
                  About the Game
                </h1>
                <span className="text-gray-400 text-md">
                  Experience the emotional storytelling and unforgettable
                  characters of The Last of Us™ Part II. Set five years after
                  their dangerous journey across the post-pandemic United
                  States, Ellie and Joel have settled down in Jackson, Wyoming.
                  Living among a thriving community of survivors has allowed
                  them peace and stability, despite the constant threat of the
                  infected and other desperate survivors. When a violent event
                  disrupts that peace, Ellie embarks on a relentless journey to
                  carry out justice and find closure. As she hunts those
                  responsible, one by one, she must confront the devastating
                  physical and emotional repercussions of her actions.
                </span>
              </div>
            </div>
          </div>
          {/* another seection of grid */}
          <div className="w-full ">
            <div className="w-full h-[900px]  flex justify-center items-center p-5 flex-col ">
              <div className="w-full h-full  flex flex-col space-y-10 p-4 shadow-lg">
                <div className="h-auto w-full space-y-3 ">
                  <h1 className="text-white  font-bold text-2xl ">
                    Description
                  </h1>
                  <span className="text-gray-400  text-md ">
                    A powerful story of survival, revenge, and the cost of
                    justice. Follow Ellie’s journey across a broken America in
                    this critically acclaimed sequel.
                  </span>
                </div>
                <div className="cover w-full h-[80%]  flex flex-col gap-5 p-4  rounded-xl  ">
                  <h1 className="text-white text-3xl font-semibold">$69.99</h1>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full ">
                    <button className="text-white bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-lg px-6 py-3 font-medium transition duration-200">
                      Add to Cart
                    </button>
                    <button className="text-white bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg px-6 py-3 font-medium transition duration-200">
                      Buy Now
                    </button>
                  </div>
                  <div className="w-full flex gap-3">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                      PC
                    </span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                      Xbox
                    </span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                      PS5
                    </span>
                  </div>
                    
                    <div className="w-full flex gap-3">
                       <span className="text-white  text-md p-2 bg-gray-700 rounded-lg">Action</span>
                       <span className="text-white  text-md p-2 bg-gray-700 rounded-lg">Adventure</span>
                    </div>


                  <div className="payment w-full h-30  p-2">
                    <h1 className="text-white text-lg  font-semibold">
                      Payment Gateway
                    </h1>
                    <div className="flex gap-3">
                      <img src={visa} alt="img" className="h-[50px] w-[50px]" />
                      <img
                        src={mastercard}
                        alt="img"
                        className="h-[50px] w-[50px]"
                      />
                      <img
                        src={paypal}
                        alt="img"
                        className="h-[50px] w-[50px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
