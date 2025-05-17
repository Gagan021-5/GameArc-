import React from "react";
import logo from "../assets/mainlogo.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState, useContext } from "react";
import { AuthUser } from "../context/Authcontext";

const Account = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthUser);
  const [registered, setregistered] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const toggle = () => setShow((prev) => !prev);

  const [show, setShow] = useState(false);

  const onSubmit = async (data) => {
    try {
      reset();
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        data
      ); //registering user
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setUser(user);
      setregistered(true);
        navigate("/");
  
    } catch (error) {
      console.log("Some error occurred failed Registration", error);
    }
  };
  const pass = watch("password"); //confirms pass check
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="sm:w-[50%] lg:w-[40%] max-sm:min-h-screen md:h-auto sm:h-auto p-5 md:w-[70%] w-full border-1 opacity-100 border-white/20 md:rounded-3xl bg-gray-800 relative">
        <button className="md:hidden text-white inline-flex gap-1   m">
          <IoMdArrowRoundBack
            onClick={() => navigate(-1)}
            className="fill-white my-auto size-6"
          />
          Back
        </button>
        <div className="w-full h-full flex flex-col items-center p-3 max-sm:text-sm">
          <img src={logo} alt="img" className="md:h-15 md:w-15 h-10 w-10" />
          <h1 className="text-white lg:text-3xl md:text-2xl text-xl p-3">
            Create Account
          </h1>
          <div className="w-full p-3 h-auto gap-5">
            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="fullname" className="text-gray-300">
                  Fullname
                </label>
                <input
                  type="text"
                  {...register("fullname", {
                    required: { value: true, message: "Fullname is Required" },
                  })}
                  className="bg-gray-900 text-white h-15 p-2 rounded-2xl outline-none shadow-lg"
                  placeholder="Enter Fullname"
                />
                {errors.fullname && (
                  <span className="text-white text-sm">
                    {errors.fullname.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="text-gray-300">
                  Username
                </label>
                <input
                  type="text"
                  {...register("username", { required: true })}
                  className="bg-gray-900 text-white h-15 p-2 rounded-2xl outline-none shadow-lg"
                  placeholder="Enter Username"
                />
                {errors.username && (
                  <span className="text-white text-sm">
                    Username is required
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: { value: true, message: "Email is Required" },
                  })}
                  className="bg-gray-900 text-white h-15 p-2 rounded-2xl outline-none shadow-lg"
                  placeholder="Enter Email"
                />
                {errors.email && (
                  <span className="text-white text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-gray-300">
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    type={show ? "text" : "password"}
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                    placeholder="Enter Password"
                    className="w-full bg-gray-900 text-white h-15 p-2 rounded-2xl outline-none shadow-lg pr-10"
                  />
                  <span
                    className="absolute right-3 top-5 text-white cursor-pointer"
                    onClick={toggle}
                  >
                    {show ? <IoMdEyeOff size={20} /> : <IoEye size={20} />}
                  </span>
                </div>

                {errors.password && (
                  <span className="text-white text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="confirmpassword" className="text-gray-300">
                  Confirm Password
                </label>
                <div className="relative w-full">
                  <input
                    type={show ? "text" : "password"}
                    {...register("confirmpassword", {
                      required: {
                        value: true,
                        message: "This is Required field",
                      },
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                      validate: (v) => v === pass || "Password Does not Match",
                    })}
                    placeholder="Enter Password"
                    className="w-full bg-gray-900 text-white h-15 p-2 rounded-2xl outline-none shadow-lg pr-10"
                  />
                  <span
                    className="absolute right-3 top-5 text-white cursor-pointer"
                    onClick={toggle}
                  >
                    {show ? <IoMdEyeOff size={20} /> : <IoEye size={20} />}
                  </span>
                </div>
                {errors.confirmpassword && (
                  <span className="text-white text-sm">
                    {errors.confirmpassword.message}
                  </span>
                )}

                {registered && (
                  <p className="text-emerald-400 pl-1 ">
                    Registered Sucessfully !
                  </p>
                )}
              </div>
              <div className="w-full flex justify-center lg:pb-3 sm:pb-1  ">
                <input
                  disabled={isSubmitting}
                  type="submit"
                  className="h-13 bg-gray-900 rounded-xl p-2 text-white w-20 text-lg cursor-pointer shadow-lg"
                  value="Create "
                />
              </div>
            </form>
        
            
          </div>
          <h1 className="text-white text-center text-lg max-sm:text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-500 hover:text-blue-600 cursor-pointer"
            >
              Sign in
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Account;
