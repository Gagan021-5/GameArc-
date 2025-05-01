import logo from "../assets/mainlogo.png"
const Login = () => {

  return (
    <>
     <div className="min-h-screen  w-full  flex justify-center items-center">
     <div className=" w-[60%] h-[90vh] p-5 rounded-3xl ">
     <div className="bg-gray-800 w-full h-full flex  flex-col items-center p-3  ">
        <img src={logo} alt="img" className="md:h-15 md:w-15 h-10 w-10 bg-gray-800"/>
        <h1 className="text-white lg:text-4xl md:text-2xl text-xl p-2 ">GameArc</h1>
    <div className=" w-full p-3 h-98  gap-5 ">
      
    <form action="" className="flex flex-col gap-4 ">
          <input type="text" className="bg-gray-900 text-white h-15 p-2  rounded-2xl outline-none "   placeholder="Enter Username" />
          <input type="email" className="bg-gray-900 text-white h-15 p-2 rounded-2xl outline-none "   placeholder="Enter Email" />
          <input type="password" className="bg-gray-900 text-white h-15 p-2 rounded-2xl outline-none "   placeholder="Enter Password" />
        </form>
    </div>

     </div>
     </div>
     </div>
    </>
  );
};

export default Login;
