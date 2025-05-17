import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthUser } from "../context/Authcontext";
import { LuLoaderPinwheel } from "react-icons/lu";


const Library = () => {
  const { user } = useContext(AuthUser);
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [savepurchased, setPurchasesSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const savePurchasesIfAny = async () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(
        "https://gamearc-espn.onrender.com/api/game/my/collection",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const purchasedIds = new Set(res.data.purchased.map((p) => p.gameId));

      for (let item of cart) {
        if (purchasedIds.has(item._id)) continue;

        await axios.post(
          "https://gamearc-espn.onrender.com/api/game/my/collection/purchase",
          {
            gameId: item._id,
            gameName: item.name,
            gameimg: item.url,
            genre: item.genre,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      localStorage.removeItem("cart");
      setPurchasesSaved(true);
    } catch (err) {
      console.error("Purchase save failed:", err);
    }
  };

  const fetchLibrary = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://gamearc-espn.onrender.com/api/game/my/collection",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setGames(res.data.purchased);
      setLoading(false);
    } catch (err) {
      console.error("Failed to load library:", err);
    }
  };

  useEffect(() => {
    if (!user || savepurchased) return;

    const handleLibrary = async () => {
      await savePurchasesIfAny();
      await fetchLibrary();
    };

    handleLibrary();
  }, [user, savepurchased]);

  if (!user) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <p className="text-white text-lg mb-3">Sign in to Access Library</p>
          <button
            onClick={() => navigate("/login")}
            className="text-white p-2 bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg"
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full p-4">
    <h1 className="text-3xl font-bold text-white mx-5 max-sm:mx-0 ">
      Your Collections
    </h1>

    {loading ? (
   <p className="text-white mt-5 text-center text-lg flex items-center justify-center">
  <LuLoaderPinwheel className="w-7 h-7  animate-spin mr-2" />
  Loading your games...
</p>
    ) : games.length === 0 ? (
      <p className="text-white mt-5 text-center text-lg">No games purchased yet.</p>
    ) : (
      <div className="p-3 w-full flex gap-10 max-sm:gap-5 flex-wrap max-sm:justify-center lg:p-5 md:p-4 ">
        {games.map((game, index) => (
          <div
            key={index}
            className="h-auto w-[95%] max-sm:w-42 sm:w-60 md:w-72 lg:w-60 rounded-xl flex flex-col bg-gray-800  opacity-100 hover:scale-101 transition duration-150 shadow-xl cursor-pointer"
          >
            <div className="h-[80%] w-full">
              <img
                src={game.gameimg}
                alt={game.gameName}
                className="rounded-t-xl object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col p-2 gap-2">
              <h1 className="text-white text-lg p-1">{game.gameName}</h1>
              <span className="text-gray-400 text-sm">
                Purchased on:{" "}
                <span className="text-white">
                  {new Date(game.purchaseDate).toLocaleDateString()}
                </span>
              </span>
              <div className="flex w-full justify-between items-center">
                <span className="text-sm text-gray-400">
                  Genre: <span className="text-white">{game.genre}</span>
                </span>
                <button className="text-white p-3 bg-blue-600 hover:bg-blue-700 text-md rounded-lg mt-2 cursor-pointer">
                  Install
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default Library;
