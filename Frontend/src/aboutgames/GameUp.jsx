import { useParams } from "react-router-dom";
import { upcoming } from "../components/Upcome.js";
import { LuLoaderPinwheel } from "react-icons/lu";
import { Remind } from "../context/Remind";
import { useContext,useState } from "react";
import { AuthUser } from "../context/Authcontext";

const Gameup = () => {
  const getAutoplayYoutubeUrl = (url) => {
    if (!url) return "";
    return url.includes("?")
      ? `${url}&autoplay=1&mute=1`
      : `${url}?autoplay=1&mute=1`;
  };
   

  const {token} = useContext(AuthUser); 
  const { id } = useParams();
  const {notify} = useContext(Remind);

  
  const [color, setcolor] = useState(() => {
    return localStorage.getItem("Remind") === "true";
  });

  const iftrue = () => {
    if (!color && token) {
      notify();
      setcolor(true);
      localStorage.setItem("Remind", "true");
    }
  };

  
  const game = upcoming.find((g) => g.id == Number(id));
  console.log(game);

  return (
    <div>
      <div className="min-h-screen w-full bg-gray-900 flex justify-center">
        {game ? (
          <div className="min-h-[70%] h-auto w-full lg:grid lg:grid-cols-2 sm:flex sm:flex-col">
 
            <div className="w-full h-auto flex justify-center items-center p-5 flex-col rounded-xl">
              <div className="w-full h-full flex flex-col space-y-10 p-4">
                <h1 className="text-white text-4xl font-extrabold">
                  {game.name}
                </h1>
                <div className="w-full flex gap-4 md:flex-row max-sm:flex-col">
                  <span className="text-white text-lg">
                    {" "}
                    🎮 Coming on {game.release_date}
                  </span>
                </div>

             
                <div className="h-90 w-auto">
                  <iframe
                    className="rounded-xl w-[94%] max-sm:w-full h-full shadow-xl"
                    src={getAutoplayYoutubeUrl(game.youtube)}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

              
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

        
            <div className="w-full">
              <div className="w-full h-[900px] flex justify-center items-center p-5 flex-col">
                <div className="w-full h-full flex flex-col space-y-10">
                  <div className="h-auto w-full space-y-3 max-sm:ml-5">
                    <h1 className="text-white font-bold text-2xl">
                      Description
                    </h1>
                    <span className="text-gray-400 text-md">
                      {game.brief_description}
                    </span>
                  </div>
                  <div className="cover w-full h-[80%] flex flex-col gap-5 p-4 rounded-xl lg:mt-10">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full">
                      <button
                        onClick={iftrue}
                          className={color ? "text-white bg-blue-700  cursor-pointer rounded-lg px-6 py-3 font-medium transition duration-200": "text-white  bg-gray-700 hover:bg-blue-700 cursor-pointer rounded-lg px-6 py-3 font-medium transition duration-200 "}
                      >
                        {color? "Reminder Set" :" Remind me"}
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
                      {game.category.map((tag) => (
                        <span
                          key={tag}
                          className="text-white text-sm p-2 bg-gray-700/70 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[80vh] flex w-full justify-center items-center">
            <p className="text-white text-lg animate-pulse flex items-center gap-2">
              <LuLoaderPinwheel className="size-7 animate-spin" />
              Loading GameDetail...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gameup;
