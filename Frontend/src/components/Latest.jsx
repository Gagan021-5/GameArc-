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
      const getgame = await axios.get(`http://localhost:4000/api/game/`);

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

        <div className="text-white lg:h-auto w-[95%] md:mx-6 max-sm:mx-4   flex gap-6 flex-wrap md:flex-wrap md:justify-center lg:justify-start lg:flex-nowrap">
          {display.map((val) => (
            <Link
              to={`/game/gamedetail/${val.id}`} // navigate to game details page
              key={val.id}
              className="text-white pb-3 bg-gray-800 w-60 max-sm:w-45 md:w-52 lg:w-60 h-auto rounded-t-2xl rounded-b-lg transition duration-300 hover:scale-105 ease-out cursor-pointer"
            >
              <div className="img w-full rounded-t-2xl h-[70%] sm:h-[180px] md:h-[200px] lg:h-[70%]">
                <img
                  src={val.url}
                  alt="img"
                  className="object-cover w-full h-full rounded-t-2xl"
                />
              </div>
              <div className="p-2">
                <h1 className="font-bold text-white whitespace-wrap truncate max-sm:text-md md:text-md">
                  {val.name}
                </h1>
                <div className="flex justify-between mt-5">
                  <h1 className="text-white my-auto size-3 text-md">
                    ${val.price}
                  </h1>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (!user) {
                        redirect("/login");
                        return;
                      }
                      already(val);
                    }}
                    className={`${
                      getitem.some((e) => e.id === val.id)
                        ? "text-white font-semibold text-xs w-20 h-8 bg-gray-900 rounded-xs p-1 my-auto cursor-pointer lg:p-2 sm:text-sm sm:w-auto sm:h-auto"
                        : "btn text-white font-semibold text-xs w-20 h-8 bg-gray-600 rounded-xs p-1 my-auto cursor-pointer lg:p-2 hover:bg-gray-900 sm:text-sm sm:w-auto sm:h-auto"
                    }`}
                  >
                    {getitem.some((e) => e.id === val.id)
                      ? "Added "
                      : "Add to cart"}
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
