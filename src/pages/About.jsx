import React from "react";
import Footer from "../components/Footer";
const About = () => {
  return (
   <>
    <div className="  min-h-screen h-auto w-full">
      <div className="lg:h-100 w-full shadow-2xl max-sm:h-[30]  ">
        <img
          src="https://wallpapercave.com/wp/wp11649053.jpg"
          alt="img"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="min-h-[300px] max-h-auto  w-full ">
        <h1 className="text-white text-3xl  font-bold text-center p-4">
          Our Story
        </h1>
        <p className="text-gray-400 text-lg  p-2">
          At Game Arc, we’re not just gamers—we’re storytellers, creators, and a
          community of passionate players united by a love for immersive gaming
          experiences. What started as a simple idea among friends turned into a
          mission to build the ultimate online destination for discovering,
          buying, and celebrating video games. Our journey began with the dream
          of creating a platform where players of all kinds—from casual
          adventurers to hardcore competitors—could find their next favorite
          game with ease. With a sleek interface, curated collections, and a
          user-friendly experience, Game Arc is designed to bring the magic of
          gaming to everyone. We believe games are more than just
          entertainment—they’re a culture, a way to connect, and a space to
          explore limitless worlds. Whether you're hunting for indie gems,
          blockbuster titles, or nostalgic classics, we’ve got something for
          every gamer.
        </p>
        <span className="text-gray-300 text-xl font-semibold  p-0  md:p-1 lg:p-2"> Welcome to Game Arc. Your next epic adventure starts here!</span>
      </div>
      <Footer/>
      
    </div>
   
   
   </>
  );
};

export default About;
