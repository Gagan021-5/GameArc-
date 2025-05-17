import { FaBell } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { useState } from "react";
import { upcoming } from "./Upcome";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const [color, setcolor] = useState(false);
  const [remind, setremind] = useState([]);

  const notify = (id) => {
    toast(" ✅ Reminder Set");
    setcolor(true);
    setremind((prev) => [...prev, id]);
  };

  return (
    <>
      <div className="w-full h-auto bg-gray-900 pb-6">
        <h1 className="text-white text-3xl font-bold p-5 mx-2 max-sm:m-0">
          Upcoming on GameArc
        </h1>

        <div className="text-white lg:h-auto w-[95%] md:mx-6 max-sm:mx-4 flex gap-6 flex-wrap md:flex-wrap md:justify-center lg:justify-start lg:flex-nowrap">
          {upcoming.map((val) => (
            <Link
              to={`/upcomingame/${val.id}`}
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
                <div className="flex  flex-col items-start gap-2 mt-5">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      notify(val.id);
                    }}
                    className={
                      remind.includes(val.id)
                        ? "cursor-pointer p-2 bg-blue-600"
                        : "cursor-pointer bg-gray-700 p-2 hover:bg-blue-600"
                    }
                  >
                    Remind me
                  </button>
                  <span>Coming on {val.release_date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default Upcoming;
