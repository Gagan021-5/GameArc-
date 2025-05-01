import React from "react";
import { RiRefund2Line } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-around  h-[300px]">
        <div className="w-[20%] flex items-center flex-col justify-center h-auto ">
          <IoGameController className="size-30 fill-white " />
          <p className="text-center text-gray-300  text-xl font-bold">
            Game with Confidence
          </p>
          <span className="text-center text-gray-300  text-lg">
            Trusted by Thousands · Instant Download
          </span>
        </div>
        <div className="w-[20%] flex flex-col items-center justify-center h-auto ">
          <RiRefund2Line className="size-30 fill-white " />
          <p className="text-center text-gray-300  text-xl font-bold">
            Buy with Confidence
          </p>
          <span className="text-center text-gray-300  text-lg">
            Not the Right Game? Request a Refund Within 7 Days · We’ve Got Your
            Back
          </span>
        </div>

        <div className="w-[20%] flex flex-col items-center justify-center h-auto ">
          <RiCustomerServiceFill className="size-30 fill-white " />
          <p className="text-center text-gray-300  text-xl font-bold">
            24/7 Support 
          </p>
          <span className="text-center text-gray-300  text-lg">
            Instant Game Access With 24/7 Support and Instant Fixes
          </span>
        </div>
      </div>
      <div className="h-[280px] w-full   flex justify-between p-5">
        <div className="w-[20%] h-full md:w-[40%] sm:w-[70%] lg:w-[30%]">
          <p className="text-gray-300  text-xl font-bold">Game Arc</p>
          <span className="text-gray-400 ont-sans ">
            we’re passionate about bringing the best in gaming right to your
            screen. Whether you're a casual player or a hardcore gamer, explore
            our handpicked collection of the latest titles, exclusive deals, and
            must-have accessories. Power up your play with us—your ultimate
            gaming destination.
          </span>
        </div>

        <div className="side p-3 flex flex-col gap-5  w-[40%]">
          <h1 className="text-gray-300  font-semibold text-xl ">
            Subscribe to our Newsletter & get 20% off
          </h1>
          <form action="">
            <div className="text-white  inline-block  ">
              <label htmlFor="news" className="text-lg">
                Email:
                <input
                  type="text"
                  name="news"
                  className="w-50 h-10 ml-2 p-1 outline-none  text-white bg-gray-600  rounded-lg placeholder:text-base"
                  placeholder="Enter your email"
                />
              </label>
            </div>
            <button className="bg-gray-700  text-white opacity-100 lg:ml-2 lg:p-3 sm:ml-20 sm:mt-3 sm:p-4 rounded-lg hover:bg-gray-800 cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </div>


    </>
  );
};

export default Footer;
