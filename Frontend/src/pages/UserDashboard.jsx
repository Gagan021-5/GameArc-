import React, { useContext } from "react";
import { AuthUser } from "../context/Authcontext";
import { Link, useNavigate } from "react-router-dom";
import { LuLoaderPinwheel } from "react-icons/lu";

const Profile = () => {
  const { user, logout } = useContext(AuthUser);
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white p-4">
          <div className="bg-gray-800 shadow-lg rounded-2xl p-7 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Your Profile
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Full Name</p>
                <p className="text-lg font-medium">{user.fullname}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Username</p>
                <p className="text-lg font-medium">{user.username}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-lg font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Created On</p>
                <p className="text-lg font-medium">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="bg-red-500 hover:bg-red-600  cursor-pointer transition-colors text-white py-2 px-4 rounded-lg shadow"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex justify-center items-center bg-gray-900">
          <p className="text-center inline-flex text-white text-xl items-center gap-2">
            <LuLoaderPinwheel className="text-white text-3xl animate-spin" />
            Loading Profile...
          </p>
        </div>
      )}
    </>
  );
};

export default Profile;
