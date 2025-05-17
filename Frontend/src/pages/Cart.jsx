import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaWindows } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import axios from "axios";
import { AuthUser } from "../context/Authcontext";
import { removecartitem } from "../counter/counterSlice";

const Cart = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user } = useContext(AuthUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      localStorage.removeItem("cart");
    }
  }, [token]);

  const cartgame = useSelector((state) => state.cart.cartitem);

  const disc = () => {
    return cartgame
      .map((item) => Number(item.discount) || 0)
      .reduce((sum, val) => sum + val, 0);
  };

  const pricetotal = () => {
    return cartgame
      .map((item) => Number(item.price) || 0)
      .reduce((sum, val) => sum + val, 0);
  };

  const taxRate = 0.1;

  const subtotal = () => {
    if (cartgame.length === 0) return 0;

    const totalPrice = pricetotal();
    const totalDiscount = disc();
    const taxAmount = (totalPrice - totalDiscount) * taxRate;

    const total = totalPrice - totalDiscount + taxAmount;
    return total.toFixed(2);
  };

  async function makePayment(cartItems) {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/game/cart/checkout",
        { cartitems: cartItems },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Preparing payment for cart:", cartgame);
      if (response.status === 200) {
        window.location.href = response.data.url;
  
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  }

  return (
    <div className="w-full min-h-screen">
      {user ? (
        cartgame.length === 0 ? (
          <div className="flex justify-center items-center w-full h-[70vh]">
            <p className="text-gray-300 md:text-4xl max-sm:text-3xl inline-flex gap-2 p-4 animate-[wiggle_3s_ease-in-out_infinite] items-center">
              <LiaCartArrowDownSolid className="fill-gray-500 text-6xl align-middle" />
              Cart is Empty
            </p>
          </div>
        ) : (
          <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Cart Items Section */}
            <div className="col-span-2 flex p-4 flex-col gap-5">
              <button className="md:hidden text-white inline-flex gap-1">
                <IoMdArrowRoundBack
                  onClick={() => navigate(-1)}
                  className="fill-white my-auto size-6"
                />
                Back
              </button>
              <h1 className="text-white text-4xl pb-2">My Cart</h1>

              {cartgame.map((val) => (
                <div
                  key={val.id}
                  className="h-auto w-full rounded-xl p-3 flex flex-col sm:flex-row bg-gray-800 gap-2 shadow-2xl"
                >
                  <div className="h-48 sm:h-full w-full sm:w-1/3">
                    <img
                      src={val.url}
                      alt="img"
                      className="h-full w-full object-cover  max-sm:object-contain rounded-md"
                    />
                  </div>
                  <div className="details w-full flex flex-col justify-between p-2">
                    <div>
                      <div className="w-full justify-between flex">
                        <h1 className="text-white text-xs bg-gray-600 rounded-sm p-2">
                          BASE GAME
                        </h1>
                        <h1 className="text-white text-lg">${val.price}</h1>
                      </div>
                      <h1 className="text-white text-2xl pt-3">{val.name}</h1>
                      <span className="text-gray-300 p-2 max-sm:truncate block">
                        {val.long_description}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 mt-2">
                      <div className="flex gap-2">
                        <FaWindows className="fill-gray-400" />
                        <IoLogoApple className="fill-gray-400" />
                      </div>
                      <h1
                        onClick={() => dispatch(removecartitem(val))}
                        className="text-gray-400 cursor-pointer hover:text-gray-100 "
                      >
                        Remove
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="col-span-1 flex p-2  max-sm:p-5 max-sm:mt-5 items-center h-[80%]">
              <div className="h-auto w-full">
                <span className="text-white text-3xl">Games Summary</span>
                <div className="h-90 w-full mt-2 p-2 flex flex-col gap-2">
                  <div className="flex justify-between w-full">
                    <h1 className="text-gray-400 text-lg">Price</h1>
                    <h1 className="text-white text-lg">${pricetotal().toFixed(2)}</h1>
                  </div>
                  <div className="flex justify-between w-full">
                    <h1 className="text-gray-400 text-lg">Taxes</h1>
                    <h1 className="text-white text-lg">
                      ${subtotal() === 0 ? 0 : taxRate}
                    </h1>
                  </div>
                  <div className="flex justify-between w-full">
                    <h1 className="text-gray-400 text-lg">Discount</h1>
                    <h1 className="text-white text-lg">${disc().toFixed(2)}</h1>
                  </div>
                  <hr className="border-gray-600 border-t" />
                  <div className="subtotal flex justify-between w-full pb-4">
                    <h1 className="text-white text-lg">Subtotal</h1>
                    <h1 className="text-white text-lg">${subtotal()}</h1>
                  </div>
                  <button
                    onClick={() => makePayment(cartgame)}
                    className="bg-blue-500 hover:bg-blue-600 p-3 text-white cursor-pointer rounded-lg"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="w-full h-[70vh] flex flex-col gap-4 justify-center items-center">
          <p className="text-white text-lg">Sign in to Access Cart items</p>
          <button
            onClick={() => navigate("/login")}
            className="text-white p-2 bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer"
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
