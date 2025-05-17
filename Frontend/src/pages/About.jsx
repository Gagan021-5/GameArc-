import React from "react";
import Footer from "../components/Footer";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen h-auto w-full  ">
        <button  className="md:hidden text-white inline-flex gap-1 pl-1 ">
          <IoMdArrowRoundBack
            onClick={() => navigate(-1)}
            className="fill-white my-auto size-6"
          />
          Back
        </button>

        <div className="w-full shadow-2xl max-sm:h-[200px] md:h-[300px] lg:h-[400px]">
          <img
            src="https://wallpapercave.com/wp/wp11649053.jpg"
            alt="img"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        <div className="min-h-[300px] w-full px-4 sm:px-6 md:px-12 lg:px-24 py-8">
          <h1 className="text-white text-3xl font-bold text-center mb-6">
            Our Story
          </h1>
          <p className="text-gray-400 text-lg mb-6 text-justify">
            At Game Arc, we’re not just gamers—we’re storytellers, creators, and
            a community of passionate players united by a love for immersive
            gaming experiences. What started as a simple idea among friends
            turned into a mission to build the ultimate online destination for
            discovering, buying, and celebrating video games. Our journey began
            with the dream of creating a platform where players of all
            kinds—from casual adventurers to hardcore competitors—could find
            their next favorite game with ease. With a sleek interface, curated
            collections, and a user-friendly experience, Game Arc is designed to
            bring the magic of gaming to everyone. We believe games are more
            than just entertainment—they’re a culture, a way to connect, and a
            space to explore limitless worlds. Whether you're hunting for indie
            gems, blockbuster titles, or nostalgic classics, we’ve got something
            for every gamer.
          </p>
          <span className="block text-gray-300 text-xl font-semibold">
            Welcome to Game Arc. Your next epic adventure starts here!
          </span>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
