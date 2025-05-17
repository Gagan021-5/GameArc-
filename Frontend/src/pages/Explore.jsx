import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { LuLoaderPinwheel } from "react-icons/lu";
import { IoIosStar } from "react-icons/io";

const Explore = () => {
  const [game, setgame] = useState([]);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchgames = async () => {
        let res = await axios.get("http://localhost:4000/api/game/explore");
        setgame(res.data);
        setloading(false);
      };
      fetchgames();
    }, 100);
  }, []);

  return (
    <div className="min-h-screen w-full ">
      <div className="p-4 w-full">
        <h1 className="text-white text-3xl font-bold mb-4 lg:pl-5">
          Explore Games
        </h1>

        {game.length === 0 && loading ? (
          <div className="h-[50vh] flex w-full justify-center items-center">
            <p className="text-white text-lg animate-pulse flex items-center gap-2">
              <LuLoaderPinwheel className="size-7 animate-spin" />
              Loading Games...
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 lg:justify-start lg:px-10  lg:gap-8 max-sm:justify-start">
            {game.map((val) => (
              <div
                key={val.id}
                className="bg-gray-800 rounded-2xl overflow-hidden w-44 sm:w-52 md:w-56 lg:w-60 hover:scale-105 transition duration-300 cursor-pointer"
              >
                <div className="h-40 sm:h-48 md:h-52 lg:h-56 w-full">
                  <img
                    src={val.background_image}
                    alt={val.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h2 className="text-white font-semibold text-sm sm:text-md truncate">
                    {val.name}
                  </h2>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-emerald-400 text-sm">
                      Rating: {val.rating}
                    </span>
                    <span className="text-white text-sm inline-flex items-center gap-1">
                      <IoIosStar className="text-lg" /> {val.rating_top}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
