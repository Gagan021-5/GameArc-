import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../counter/counterSlice";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthUser } from "../context/Authcontext";

const Latest = () => {
  const { user } = useContext(AuthUser);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartitem);
  const dispatch = useDispatch();

  const [selected] = useState([50, 4, 51, 52, 53, 54]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const latestfetch = async () => {
      const response = await axios.get(`https://gamearc-espn.onrender.com/api/game/`);
      const filtered = response.data.filter((game) => selected.includes(game.id));
      setDisplay(filtered);
    };

    latestfetch();
  }, []);

  const addToCartIfNotExists = (game) => {
    const exists = cartItems.some((item) => item.id === game.id);
    if (!exists) {
      dispatch(addtocart(game));
    }
  };

  return (
    <div className="w-full bg-gray-900 pb-6">
      <h1 className="text-white text-3xl font-bold p-5 mx-auto">
        Latest Release
      </h1>

      {/* SAME RESPONSIVE LAYOUT AS FEATURED */}
      <div className="text-white lg:h-auto w-[95%] md:mx-6 max-sm:mx-4 
                      flex gap-6 max-sm:flex-wrap md:flex-wrap 
                      md:justify-center lg:justify-center xl:flex-nowrap">

        {display.map((val) => (
          <Link
            to={`/game/gamedetail/${val.id}`}
            key={val.id}
            className="text-white pb-3 bg-gray-800 
                       w-60 max-sm:w-45 md:w-52 lg:w-60 h-auto 
                       rounded-t-2xl rounded-b-lg 
                       transition duration-300 hover:scale-105 
                       ease-out cursor-pointer"
          >
            {/* IMAGE HEIGHT MATCHES FEATURED */}
            <div className="img w-full rounded-t-2xl 
                            h-[70%] sm:h-[180px] md:h-[200px] lg:h-[70%]">
              <img
                src={val.url}
                alt={val.name}
                className="object-cover w-full h-full rounded-t-2xl"
              />
            </div>

            <div className="p-2">
              <h1 className="font-bold text-white truncate max-sm:text-md md:text-md">
                {val.name}
              </h1>

              <div className="flex justify-between mt-5">
                <h1 className="text-white text-md">${val.price}</h1>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (!user) {
                      navigate("/login");
                      return;
                    }
                    addToCartIfNotExists(val);
                  }}
                  className={`${
                    cartItems.some((item) => item.id === val.id)
                      ? "text-white font-semibold text-xs w-20 h-8 bg-gray-900 rounded-xs p-1 my-auto cursor-pointer lg:p-2"
                      : "text-white font-semibold text-xs w-20 h-8 bg-gray-600 rounded-xs p-1 my-auto cursor-pointer lg:p-2 hover:bg-gray-900"
                  }`}
                  disabled={cartItems.some((item) => item.id === val.id)}
                >
                  {cartItems.some((item) => item.id === val.id)
                    ? "Added"
                    : "Add to cart"}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Latest;
