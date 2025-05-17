import logo from "../assets/mainlogo.png";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { AuthUser } from "../context/Authcontext";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Login = () => {
  const { loginuser, loginErr, signinGoogle, signinGit } = useContext(AuthUser);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    let thelogin = await loginuser({
      email: data.email,
      password: data.password,
    });

    console.log(data);
    if (thelogin) {
      navigate("/");
      reset();
    }
  };
  const toggle = () => setShow((prev) => !prev);

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="min-h-screen  w-full backdrop-blur-sm backdrop-brightness-75 flex justify-center items-center absolute">
        <div className=" sm:w-[50%] lg:w-[40%] max-sm:min-h-screen md:h-auto sm:h-auto p-5 md:w-[70%]  w-full border-1 opacity-100 border-white/20 md:rounded-3xl bg-gray-800 relative">
          <div className=" w-full h-full flex  flex-col items-center p-3 max-sm:text-sm  ">
            <img src={logo} alt="img" className="md:h-15 md:w-15 h-10 w-10 " />
            <h1 className="text-white lg:text-4xl md:text-2xl text-xl p-2 ">
              Sign in
            </h1>

            <div className="w-full p-3 gap-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 "
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-gray-300 ">
                    Email
                  </label>
                  <input
                    type="text"
                    className="bg-gray-900 text-white h-15 p-2 rounded-2xl outline-none shadow-lg "
                    placeholder=" Email "
                    {...register("email", {
                      required: { value: true, message: "Email is Required" },
                    })}
                  />
                  {errors.email && (
                    <span className="text-white text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="text-gray-300 ">
                    Password
                  </label>
                  <div className="relative w-full">
                    <input
                      type={show ? "text" : "password"}
                      {...register("password", {
                        required: {
                          value: true,
                          message: "This field is Required",
                        },
                        minLength: {
                          value: 6,
                          message: "Minimum 6 characters",
                        },
                      })}
                      placeholder=" Password"
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
                  {loginErr && <p className="text-red-500 pl-1">{loginErr}</p>}
                </div>
                <div className="w-full flex justify-center lg:pb-3 sm:pb-1  ">
                  <input
                    disabled={isSubmitting}
                    type="submit"
                    className="h-13 bg-gray-900  rounded-xl p-2 text-white w-20 text-lg cursor-pointer shadow-lg"
                    value="Sign in"
                  />
                </div>
              </form>
              <p className="text-gray-300 text-center my-4">or Sign in with</p>
              <div className="flex justify-center gap-4 mt-4 pb-3">
        
                <button
                  onClick={async () => {
                    try {
                      await signinGoogle();
                      navigate("/");
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  className="bg-gray-900  cursor-pointer  hover:shadow-lg p-4  gap-2 rounded text-white inline-flex "
                > 
                <FaGoogle className=" my-auto size-5"/>
                  Sign in with Google
                </button>
                <button
                  onClick={async () => {
                    try {
                      await signinGit();
                      navigate("/");
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  className="bg-gray-900 cursor-pointer hover:shadow-lg p-4 gap-2 inline-flex rounded text-white"
                > 
                <FaGithub className="my-auto size-5" />

                  Sign in with GitHub
                </button>
              </div>
            </div>
            <h1 className="text-white text-center text-lg  max-sm:text-sm  max-sm:mt-7">
              New to GameArc ?
              <span
                onClick={() => navigate("/register")}
                className="text-blue-500 hover:text-blue-600 cursor-pointer"
              >
                {" "}
                Create Account
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
