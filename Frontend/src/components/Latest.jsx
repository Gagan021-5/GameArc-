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
  }, [selected]);

  const addToCartIfNotExists = (game) => {
    const exists = cartItems.some((item) => item.id === game.id);
    if (!exists) {
      dispatch(addtocart(game));
    }
  };

  return (
    <div className="w-full bg-gray-900 pb-6">
      <h1 className="text-white text-3xl font-bold p-5 mx-2 max-sm:m-0">
        Latest Release
      </h1>
<div className="text-white w-[95%] mx-auto flex flex-wrap gap-4 justify-center md:justify-start">
  {display.map((val) => (
    <Link
      to={`/game/gamedetail/${val.id}`}
      key={val.id}
      className="bg-gray-800 rounded-2xl transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col
                 basis-[48%] sm:basis-60 min-w-[160px]"
    >
      <div className="h-40 sm:h-48 rounded-t-2xl overflow-hidden">
        <img
          src={val.url}
          alt={val.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h1 className="font-bold text-white truncate mb-3" title={val.name}>
          {val.name}
        </h1>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-white font-semibold text-lg">${val.price}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!user) {
                navigate("/login");
                return;
              }
              addToCartIfNotExists(val);
            }}
            className={`text-white font-semibold text-sm px-3 py-1 rounded ${
              cartItems.some((item) => item.id === val.id)
                ? "bg-gray-900 cursor-default"
                : "bg-gray-600 hover:bg-gray-900 cursor-pointer"
            }`}
            disabled={cartItems.some((item) => item.id === val.id)}
          >
            {cartItems.some((item) => item.id === val.id) ? "Added" : "Add to cart"}
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

