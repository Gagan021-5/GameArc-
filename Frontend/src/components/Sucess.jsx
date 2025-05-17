import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthUser } from "../context/Authcontext";

const Success = () => {
  const { user } = useContext(AuthUser);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function savePurchases() {
      try {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
          navigate("/library");
          return;
        }

        for (const item of cart) {
       
          const res = await axios.post(
            "http://localhost:4000/api/game/my/collection/purchase",
            {
              gameId: item._id,
              gameName: item.name,
              gameimg: item.url,
              genre: item.genre,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
        }

        localStorage.removeItem("cart");
        navigate("/library");
      } catch (err) {
        console.error("Error saving purchases:", err);
      } finally {
        setLoading(false);
      }
    }

    if (user === undefined) {
      return;
    }

    if (user && token) {
      savePurchases();
    } else if (!user && !loading) {
      navigate("/login");
    }
  }, [user, token, navigate, loading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <h2>Processing your purchase... Please wait.</h2>
      </div>
    );
  }

  return null;
};

export default Success;
