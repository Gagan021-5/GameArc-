import {  useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";
import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "../counter/counterSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LuLoaderPinwheel } from "react-icons/lu";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useContext } from "react";
import { AuthUser } from "../context/Authcontext";
const Game = () => {
  const { user } = useContext(AuthUser);
  const dispatch = useDispatch();
  const getitem = useSelector((e) => e.cart.cartitem);
  const { id } = useParams();
  const [game, getgame] = useState(null);
  const navigate = useNavigate();

  const getAutoplayYoutubeUrl = (url) => {
    return url.includes("?")
      ? `${url}&autoplay=1&mute=1`
      : `${url}?autoplay=1&mute=1`;
  };

  useEffect(() => {
    setTimeout(() => {
      const getgamebyid = async () => {
        const gamebyid = await axios.get(
          `http://localhost:4000/api/game/${id}`
        );
        getgame(gamebyid.data);
      };
      getgamebyid();
    }, 0);
  }, [id]);

  const [curr, setcurr] = useState(null); //setting up the images

  return (
    <div className="min-h-screen w-full bg-gray-900 flex justify-center ">
      {game ? (
        <div className="min-h-[70%] h-auto w-full lg:grid lg:grid-cols-2 sm:flex sm:flex-col">
          <button className="md:hidden text-white inline-flex gap-1 pl-6 max-sm:mt-4  m">
            <IoMdArrowRoundBack
              onClick={() => navigate(-1)}
              className="fill-white my-auto size-6"
            />
            Back
          </button>
          <div className="w-full h-auto flex justify-center items-center p-5 flex-col rounded-xl ">
            <div className="w-full h-full flex flex-col space-y-10 p-4 ">
              <h1 className="text-white text-4xl font-extrabold ">
                {game.name}
              </h1>
              <div className="w-full flex gap-4 md:flex-row max-sm:flex-col ">
                <span className="text-white text-lg">⭐{game.rating}</span>
                <p className="text-gray-400 text-md my-auto">
                  🎨 Inclusive Character Customization
                </p>
                <p className="text-gray-400 text-md my-auto">
                  🥷 Great Battles
                </p>
              </div>

              {/* video */}
              <div className="h-90 w-auto ">
                {!curr ? (
                  <iframe
                    className="rounded-xl w-[93%] max-sm:w-[100%] h-full shadow-2xl lg:ml-3 "
                    src={getAutoplayYoutubeUrl(game.youtube)}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="relative w-[94%] h-full">
                    <img
                      src={curr}
                      alt="Selected screenshot"
                      className="rounded-xl w-full h-full object-contain  shadow-xl"
                    />
                    <button
                      onClick={() => setcurr(null)}
                      className="absolute top-2 right-2 hover:bg-black cursor-pointer  text-white px-3 py-1 rounded-lg text-sm bg-black/80"
                    >
                      Watch Trailer
                    </button>
                  </div>
                )}
              </div>

              {/* images */}
              <div className="images h-70 w-full flex justify-between p-2  max-sm:h-60 ">
                {game.screenshots.map((val, index) => {
                  return (
                    <div key={index} className="h-auto  w-[30%] ">
                      <img
                        onClick={() => {
                          setcurr(val); //src
                        }}
                        src={val}
                        alt="img"
                        className="object-contain  h-full w-full rounded-xl opacity-80 transition duration-200 ease-in-out hover:opacity-100 cursor-pointer"
                      />
                    </div>
                  );
                })}
              </div>

              {/* about the game */}
              <div className="w-full space-y-4">
                <h1 className="text-white text-3xl font-bold">
                  About the Game
                </h1>
                <span className="text-gray-400 text-md">
                  {game.long_description}
                </span>
              </div>
            </div>
          </div>
          {/* another section of grid */}
          <div className="w-full ">
            <div className="w-full h-[900px] flex justify-center items-center p-5 flex-col ">
              <div className="w-full h-full flex flex-col space-y-10  ">
                <div className="h-auto w-full space-y-3 max-sm:ml-4 ">
                  <h1 className="text-white font-bold text-2xl ">
                    Description
                  </h1>
                  <span className="text-gray-400 text-md ">
                    {game.brief_description}
                  </span>
                </div>
                <div className="cover w-full h-[80%] flex flex-col gap-5 p-4 rounded-xl lg:mt-10 ">
                  <h1 className="text-white text-3xl font-semibold">
                    ${game.price}
                  </h1>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full ">
                    <button
                      onClick={(e) => {
                        e.preventDefault;
                        if(!user){
                          navigate("/login");
                          return ;
                        }
                        dispatch(addtocart(game))}}
                      className={`${
                        getitem.some((e) => e.id === game.id)
                          ? "text-white font-semibold  bg-gray-800 rounded-lg px-6 py-3"
                          : "btn text-white font-semibold bg-gray-700 rounded-lg px-6 py-3 cursor-pointer hover:bg-gray-800"
                      }`}
                    >
                      {getitem.some((e) => e.id === game.id)
                        ? "Added to cart"
                        : "Add to cart"}
                    </button>
                    <button
                      onClick={(g) => {
                        g.preventDefault;
                        if(!user){
                          navigate("/login");
                         return ;
                        }
                        dispatch(addtocart(game));
                        navigate("/cart");
                      }}
                      className="text-white bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg px-6 py-3 font-medium transition duration-200"
                    >
                      Buy Now
                    </button>
                  </div>

                  <div className="w-full flex gap-3">
                    {game.platforms.map((platform, index) => (
                      <span
                        key={index}
                        className="bg-gray-700/70 text-white px-2 py-1 rounded text-sm"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

                  <div className="w-full flex gap-3">
                    {game.tags.map((tag) => {
                      return (
                        <span
                          key={tag}
                          className="text-white text-sm p-2 bg-gray-700/70 rounded-lg "
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <div className="publisher w-full flex gap-3">
                    <span className="text-white text-md p-2 bg-gray-700/70 rounded-lg text-sm max-sm:text-xs">
                      {game.developer}
                    </span>
                    <span className="text-white text-md p-2   bg-gray-700/70 rounded-lg text-sm max-sm:text-xs">
                      {game.publisher}
                    </span>
                  </div>

                  <div className="payment w-full h-30 p-2">
                    <h1 className="text-white text-lg font-semibold">
                      Payment Gateway
                    </h1>
                    <div className="flex gap-3">
                      <img src={visa} alt="img" className="h-[50px] w-[50px]" />
                      <img
                        src={mastercard}
                        alt="img"
                        className="h-[50px] w-[50px]"
                      />
                      <img
                        src={paypal}
                        alt="img"
                        className="h-[50px] w-[50px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[80vh] flex w-full justify-center items-center">
          <p className="text-white text-lg animate-pulse flex items-center gap-2">
            <LuLoaderPinwheel className="size-7" />
            Loading GameDetail...
          </p>
        </div>
      )}
    </div>
  );
};

export default Game;
