import React from "react";
import { RiRefund2Line } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";
import { useState } from "react";

const Footer = () => {
  const [msg, setmsg] = useState("");

  const popupmsg = (e) => {
    e.preventDefault();
    setmsg(
      "🎉 Thank you for subscribing! You've unlocked 20% off on your next game purchase. Stay tuned for more exclusive deals!"
    );
  };

  return (
    <>
      <div className="w-full flex flex-wrap justify-center sm:justify-around gap-5 sm:gap-3 h-auto sm:h-[300px] p-4">
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] flex items-center flex-col justify-center text-center">
          <IoGameController className="size-20 lg:size-30 fill-white mb-2" />
          <p className="text-gray-300 text-xl font-bold">
            Game with Confidence
          </p>
          <span className="text-gray-300 text-lg">
            Trusted by Thousands · Instant Download
          </span>
        </div>
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] flex flex-col items-center justify-center text-center">
          <RiRefund2Line className="size-20 lg:size-30 fill-white mb-2" />
          <p className="text-gray-300 text-xl font-bold">Buy with Confidence</p>
          <span className="text-gray-300 text-lg">
            Not the Right Game? Request a Refund Within 7 Days · We’ve Got Your
            Back
          </span>
        </div>
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] flex flex-col items-center justify-center text-center">
          <RiCustomerServiceFill className="size-20 lg:size-30 fill-white mb-2" />
          <p className="text-gray-300 text-xl font-bold">24/7 Support</p>
          <span className="text-gray-300 text-lg">
            Instant Game Access With 24/7 Support and Instant Fixes
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-6 p-5 h-auto sm:h-[280px]">
        <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[30%]">
          <p className="text-gray-300 text-xl font-bold">Game Arc</p>
          <span className="text-gray-300">
            We’re passionate about bringing the best in gaming right to your
            screen. Whether you're a casual player or a hardcore gamer, explore
            our handpicked collection of the latest titles, exclusive deals, and
            must-have accessories. Power up your play with us—your ultimate
            gaming destination.
          </span>
        </div>

        <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[40%] p-3 flex flex-col gap-5">
          <h1 className="text-gray-300 font-semibold text-xl">
            Subscribe to our Newsletter & get 20% off
          </h1>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={popupmsg}>
            <input
              required
              type="email"
              name="news"
              className="flex-1 p-2 text-white bg-gray-600 rounded-lg placeholder:text-base outline-none"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-800 cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          <p className="text-emerald-400">{msg}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
