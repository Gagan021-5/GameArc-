import React from "react";
import { useState } from "react";
import myImage from "../assets/last.jpg";
import gtav from "../assets/gtav.jpg";
import Featured from "../components/Featured";
import Latest from "../components/Latest";
import Upcoming from "../components/Upcoming"
import TopSell from "../components/TopSell";


import one from "../assets/one.jpg"


const Home = () => {
  const [images, setimage] = useState([
    myImage,
    gtav,
    "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/949e0a50124a889b098f73cedc29fb3b.jpg",
     one,
     "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/gta-v/9ca23774eb886a9dce533874723e35ce7a825f5d.png",
     "https://wallpapercave.com/wp/wp9754023.jpg"
  ]) 


  return (
    <>
    
    <div className="w-full min-h-[90%] flex justify-center items-start bg-gray-900 p-2">
      <div className="w-full sm:w-[90%] lg:h-[70vh] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition duration-200 hover:scale-101 ease-in-out lg:w-[95%] md:h-[40%]  ">
        <img
          
          src={images[2]}
          alt="Game"
          className="w-full h-full lg:object-cover rounded-2xl  "
        />
      </div> 
    </div>
    <Latest />
    <Featured/>
    <Upcoming/>
    <TopSell/>

    </>
   
  );
};

export default Home;
