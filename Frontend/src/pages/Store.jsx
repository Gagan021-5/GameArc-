import React, { useState, useEffect, useContext } from "react";
import Filter from "../components/Filter";
import { SearchContext } from "../context/Searchinput";
import { IoSearch } from "react-icons/io5";
import { Filtercontext } from "../context/Filtercontext";
import { IoFilter } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../counter/counterSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { LuLoaderPinwheel } from "react-icons/lu";
import { AuthUser } from "../context/Authcontext";
import Smfilter from "../components/Smfilter";
import { IoClose } from "react-icons/io5";

const Store = () => {
  const { user } = useContext(AuthUser);

  const redirect = useNavigate();
  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.cart.cartitem);

  const { search, setSearch } = useContext(SearchContext);
  const { price, category, rating } = useContext(Filtercontext);
  const [input, setinput] = useState(false);
  const [showfil, setshowfil] = useState(false);

  const showfilter = () => {
    setTimeout(() => {
      setshowfil(!showfil);
    }, 300);
  };

  const render = (e) => {
    setSearch(e.target.value);
  };

  const getactive = () => {
    setinput((prev) => {
      let after = !prev;
      if (after && search) {
        setSearch(search);
      }
      return after;
    });
  };

  const [games, setallgames] = useState([]);
  const [first, setfirst] = useState([]);
  const [next, setnext] = useState(9);
  const [onmore, setonmore] = useState(true);
  const [loading, setLoading] = useState(true);
  const loadmore = () => {
    setTimeout(() => {
      setnext((prev) => {
        const newNext = prev + 9;
        if (newNext >= first.length) {
          setonmore(false);
        }
        return newNext;
      });
    }, 100);
  };

  useEffect(() => {
    setLoading(true);
    const allofthem = async () => {
      let res = await axios.get("https://gamearc-espn.onrender.com/api/game");
      setfirst(res.data);
      setallgames(res.data.slice(0, next));
      setLoading(false);
    };
    allofthem();
  }, []);

  useEffect(() => {
    let all = [...first];
 

    if (search) {
      all = all.filter((game) =>
        game.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      all = all.filter((e) => e.genre === category);
    }

    if (price) {
      let p = parseInt(price, 10);
      if (p === 10) all = all.filter((e) => e.price > 0 && e.price <= 10);
      else if (p === 20) all = all.filter((e) => e.price > 10 && e.price <= 20);
      else if (p === 30) all = all.filter((e) => e.price > 20 && e.price <= 30);
      else if (p === 40) all = all.filter((e) => e.price > 30);
    }

    if (rating) {
      let r = parseInt(rating);
      all = all.filter((e) => e.rating === r);
    }

    setallgames(all.slice(0, next));
  }, [search, price, rating, category, next]);

  return (
    <>
      <div className="bg-gray-900 flex lg:justify-center min-h-screen w-full p-0 sm:p-7">
        {loading ? (
          <div className="h-[50vh] flex w-full justify-center items-center">
            <p className="text-white text-lg animate-pulse flex items-center gap-2">
              <LuLoaderPinwheel className="size-7 animate-spin" />
              Loading Shop...
            </p>
          </div>
        ) : (
          <div className="min-h-[90vh] h-auto rounded-2xl flex p-1 lg:p-3 w-full lg:w-[90%]">
            <Filter />

            <div className="bg-gray-900 lg:w-[70%] lg:p-2 rounded-lg sm:w-full max-sm:p-0">
              <div className="w-full p-2 pb-1 flex justify-between">
                <h1 className="text-white font-bold text-3xl">Browse Games</h1>
                <div className="flex items-center gap-2 p-2 max-sm:w-full max-sm:justify-end">
                  <IoSearch
                    onClick={getactive}
                    className="fill-white cursor-pointer my-auto size-6 max-sm:size-5"
                  />
                  {input && (
                    <input
                      value={search}
                      onChange={render}
                      type="text"
                      className="w-[200px] max-sm:w-full text-white rounded-2xl border outline-none border-gray-300 px-2 py-1 transition duration-200 delay-75 ease-in-out bg-gray-800"
                      placeholder="Search a Game"
                    />
                  )}
                  <IoFilter //filter
                    className="fill-white size-5 cursor-pointer md:hidden relative"
                    onClick={showfilter}
                  />
                  {showfil && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-start pt-20 p-4 overflow-auto">
                      <div className="bg-gray-900 text-white w-full max-w-md h-auto shadow-lg rounded-xl relative p-6 overflow-hidden">
                        <button
                          onClick={() => setshowfil(false)}
                          className="absolute top-3 right-3 text-white text-xl font-bold"
                          aria-label="Close Filter"
                        >
                          <IoClose />
                        </button>
                        <Smfilter />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full h-auto lg:p-3 flex flex-wrap gap-4 p-3 justify-start">
                {games.length === 0 ? (
                  <p className="text-lg text-gray-400 text-center w-full">
                    No games found matching your filters.
                  </p>
                ) : (
                  <>
                    {games.map((val, index) => (
                      <Link to={`/game/gamedetail/${val.id}`} key={val.id}>
                        <div
                          key={index}
                          className="text-white bg-gray-800 lg:pb-3 rounded-lg lg:w-65    max-sm:w-45 md:w-53 flex flex-col justify-between lg:rounded-t-2xl rounded-b-lg transition duration-300 shadow-md hover:scale-105 ease-out cursor-pointer"
                        >
                          <div className="w-full aspect-[3/4] overflow-hidden rounded-t-2xl shadow-inner">
                            <img
                              src={val.url}
                              alt="img"
                              className="w-full h-full object-cover block"
                            />
                          </div>

                          <div className="lg:p-2 p-1">
                            <h1 className="font-bold text-white text-base lg:text-lg tracking-wide truncate">
                              {val.name}
                            </h1>
                            <div className="flex flex-col gap-1 justify-between lg:mt-2  lg:gap-1 mt-3">
                              <h1 className="text-white my-auto md:text-md lg:text-lg">
                                ${val.price}
                              </h1>

                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (!user) {
                                    redirect("/login");
                                    return;
                                  }
                                  dispatch(addtocart(val));
                                }}
                                className={`${
                                  cartitem.some((e) => e.id === val.id)
                                    ? "text-white font-semibold w-full md:h-10 bg-gray-900 max-sm:h-7 rounded-lg p-1"
                                    : "btn text-white font-semibold md:h-10 bg-gray-700 rounded-lg max-sm:h-8 p-1 cursor-pointer hover:bg-gray-900"
                                }`}
                              >
                                {cartitem.some((e) => e.id === val.id)
                                  ? "Added to cart"
                                  : "Add to Cart"}
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (!user) {
                                    redirect("/login");
                                    return;
                                  }
                                  dispatch(addtocart(val));
                                  redirect("/cart");
                                }}
                                className="btn text-white font-semibold rounded-lg md:h-10 max-sm:h-8 cursor-pointer bg-blue-600 transition duration-150 ease-in-out p-1 hover:bg-blue-700"
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {onmore && (
                      <div className="text-white w-full flex justify-center mt-4">
                        <button
                          onClick={loadmore}
                          className="bg-gray-800 hover:bg-blue-600 p-3 cursor-pointer rounded-md transition-all shadow-md "
                        >
                          Load More
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Store;
