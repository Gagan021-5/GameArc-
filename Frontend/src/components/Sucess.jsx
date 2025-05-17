import { useNavigate } from "react-router-dom";


const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen text-white flex-col">
      <h2 className="text-3xl font-semibold mb-4 text-emerald-400">Payment Successful!</h2>
      <p className="mb-6">Thank you for your purchase.</p>
      <button
        onClick={() => navigate("/library")}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white  cursor-pointer"
      >
        Go to Library
      </button>
    </div>
  );
};

export default Success;
