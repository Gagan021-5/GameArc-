import React from "react";
import { useState } from "react";
import Featured from "../components/Featured";
import Latest from "../components/Latest";
import Upcoming from "../components/Upcoming";
import TopSell from "../components/TopSell";
import { useEffect } from "react";
import { Link } from "react-router-dom";















const Home = () => {
  const arrofimg = [
    {
      id: 9,
      url: "https://images4.alphacoders.com/136/1363264.jpeg",
    },
    {
      id: 23,
      url: "https://images8.alphacoders.com/514/514576.jpg",
    },
    {
      id: 31,
      url: "https://images4.alphacoders.com/122/1223245.png",
    },
    {
      id: 38,
      url: "https://images3.alphacoders.com/127/1273405.jpg",
    },
    {
      id: 37,
      url: "https://images8.alphacoders.com/129/1293122.jpg",
    },
  ];

  const [index, setindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setindex((prev) => (prev + 1) % arrofimg.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full min-h-[90%] flex justify-center items-start bg-gray-900 p-2  relative ">
       
        <div className="w-full sm:w-[90%] md:w-[95%] md:h-auto lg:h-[70vh] rounded-3xl max-sm:rounded-lg  relative overflow-hidden shadow-2xl cursor-pointer transition duration-200 hover:scale-[1.01] ease-in-out">
          {arrofimg.length > 0 && (
            <Link to={`/game/gamedetail/${arrofimg[index].id}`}>
            <img
            loading="lazy"
              key={arrofimg[index].id}
              src={arrofimg[index].url}
              alt="Game"
              className="w-full h-auto object-cover rounded-2xl max-sm:rounded-lg transition-opacity duration-700 ease-in-out opacity-100"
            /></Link>
          )}
        </div>
      </div>

      <Latest />
      <Featured />
      <Upcoming />
      <TopSell />
    </>
  );
};

export default Home;
