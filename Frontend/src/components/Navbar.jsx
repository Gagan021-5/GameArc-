import React, { useContext, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/mainlogo.png";
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AuthUser } from "../context/Authcontext";
import axios from "axios";

const Navbar = () => {
  const { user, token, setUser } = useContext(AuthUser);
  const count = useSelector((state) => state.cart.value);

  const [menu, setmenu] = useState(false);

  const show = () => {
    setmenu(!menu);
  };

  useEffect(() => {
    const getuserbyname = async () => {
      if (!token) return;

      try {
        const res = await axios.get("https://gamearc-espn.onrender.com/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let datafromuser = res.data;

        setUser(datafromuser);
      } catch (e) {
        console.log("Error fetching user", e);
      }
    };

    getuserbyname();
  }, [token]);

  return (
    <>
      <nav className="bg-gray-900 w-full h-auto p-4 flex justify-between lg:items-center md:flex ">
        <Link to="/">
          {" "}
          <div className="flex items-center flex-nowrap gap-0.5 cursor-pointer">
            <img src={logo} alt="img" className="my-auto mx-auto h-10  w-10" />
            <h1 className="text-white  font-semibold text-2xl max-sm:hidden">
              GameArc
            </h1>
          </div>
        </Link>
        <ul className="md:flex  md:items-center md:gap-4 lg:gap-6  max-md:hidden ">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-white font-medium "
                  : "text-lg text-gray-300"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-lg text-white font-medium "
                  : " text-lg text-gray-300"
              }
              to="/store"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-lg text-white font-medium "
                  : "text-lg text-gray-300"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-lg text-white font-medium "
                  : " text-lg text-gray-300"
              }
              to="/library"
            >
              Library
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-lg text-white font-medium "
                  : "text-lg text-gray-300"
              }
              to="/Explore"
            >
              Explore
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-3 ">
          <Link to="/cart">
            <div className="relative  ">
              <FaShoppingCart className="fill-white my-auto size-5 cursor-pointer " />
              {count == 0 ? (
                ""
              ) : (
                <span className="text-white rounded-full bg-blue-600 h-4 w-4 absolute z-10 -top-2 -right-2 flex items-center justify-center text-sm  max-sm:text-xs">
                  {count}
                </span>
              )}
            </div>
          </Link>
          <Link to={user ? "/userprofile" : "/login"}>
            <div className="relative group cursor-pointer">
              {user && user.fullname ? (
                <p className=" text-blue-400 hover:text-blue-500 p-2 rounded-lg font-bold">
                  {user.fullname}
                </p>
              ) : (
                <FaUserCircle className="fill-white my-auto size-5 cursor-pointer" />
              )}
            </div>
          </Link>

          <FaBars onClick={show} className="fill-white my-auto md:hidden " />
        </div>{" "}
        {menu && (
          <div className="absolute top-16 right-0 z-50 w-48 transition  duration-200 delay-75  bg-gray-900 rounded shadow-lg md:hidden">
            <ul className="text-gray-300 flex flex-col p-4 gap-3 ">
              <li className="text-gray-300 hover:text-white">
                <Link to="/" onClick={() => setmenu(false)}>
                  Home
                </Link>
              </li>
              <li className="text-gray-300 hover:text-white">
                <Link to="/store" onClick={() => setmenu(false)}>
                  Shop
                </Link>
              </li>
              <li className="text-gray-300 hover:text-white">
                <Link to="/library" onClick={() => setmenu(false)}>
                  Library
                </Link>
              </li>
              <li className="text-gray-300 hover:text-white">
                <Link to="/explore" onClick={() => setmenu(false)}>
                  Explore Games
                </Link>
              </li>
              <li className="text-gray-300 hover:text-white">
                <Link to="/about" onClick={() => setmenu(false)}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
