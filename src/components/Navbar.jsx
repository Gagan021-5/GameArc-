import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/mainlogo.png";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [input, setinput] = useState(false);
  const getactive = () => {
    setinput(!input);
  };

  return (
    <>
      <nav className="bg-gray-900 w-full h-auto p-4 flex justify-between lg:items-center md:flex">
      <Link to="/"> <div
         
          className="flex items-center flex-nowrap gap-0.5 cursor-pointer"
        >
          <img src={logo} alt="img" className="my-auto mx-auto h-10  w-10" />
          <h1 className="text-white  font-semibold text-2xl max-sm:hidden">GameArc</h1>
        </div>

      </Link>
        <ul className="md:flex  md:items-center md:gap-4 lg:gap-6  max-md:hidden ">
          <li className="text-lg text-white font-medium hover:underline  ">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg  text-white font-medium  hover:underline ">
            <Link to="/store">Store</Link>
          </li>
          <li className="text-lg  text-white font-medium  hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="text-lg  text-white font-medium hover:underline">
            <Link to="/library">Library</Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <CiSearch
            onClick={getactive}
            className="fill-white cursor-pointer my-auto size-6"
          />
          {input && (
            <input
              type="text"
              className=" w-40 h-auto text-white rounded-2xl border border-gray-300 px-2 py-1 transition duration-200 delay-75 ease-in-out"
              placeholder="Search a Game"
            />
          )}
          <Link to="/cart">
            <FaShoppingCart className="fill-white my-auto size-5 cursor-pointer" />
          </Link>
          <Link to="/login">
            <FaRegUserCircle className="fill-white my-auto size-5 cursor-pointer" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
