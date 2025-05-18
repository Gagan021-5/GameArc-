import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../counter/counterSlice";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthUser } from "../context/Authcontext";
const Latest = () => {
  const { user } = useContext(AuthUser);
  const redirect = useNavigate();
  const getitem = useSelector((e) => e.cart.cartitem);
  const dispatch = useDispatch();
  const [selected] = useState([50, 4, 51, 52, 53, 54]);
  const [display, setdisplay] = useState([]);

  useEffect(() => {
    const latestfetch = async () => {
      const getgame = await axios.get(`https://gamearc-espn.onrender.com/api/game/`);

      let filtered = getgame.data.filter((e) => selected.includes(e.id));
      setdisplay(filtered);
    };

    latestfetch();
  }, []);

  const already = (game) => {
    let ifexist = getitem.some((g) => g.id === game.id);

    if (!ifexist) {
      dispatch(addtocart(game));
    }
  };

  return (
    <>
      <div className="w-full h-auto bg-gray-900 pb-6">
        <h1 className="text-white text-3xl font-bold p-5 mx-2 max-sm:m-0">
          Latest Release
        </h1>
   <div className="text-white w-full px-2 flex flex-wrap gap-4 justify-center sm:justify-start">
  {display.map((val) => (
    <Link
      to={`/game/gamedetail/${val.id}`}
      key={val.id}
      className="bg-gray-800 rounded-2xl transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col
                 w-[48%] sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] min-w-[150px] max-w-[300px]"
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
      redirect("/login");
      return;
    }
    already(val); 
  }}
  className={`text-white font-semibold text-sm px-3 py-1 rounded ${
    getitem.some((item) => item.id === val.id)
      ? "bg-gray-900 cursor-default"
      : "bg-gray-600 hover:bg-gray-900 cursor-pointer"
  }`}
  disabled={getitem.some((item) => item.id === val.id)}
>
  {getitem.some((item) => item.id === val.id) ? "Added" : "Add to cart"}
</button>
        </div>
      </div>
    </Link>
  ))}
</div>
      </div>
    </>
  );
};

export default Latest;
