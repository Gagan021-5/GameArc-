import React from "react";
import { useState } from "react";

const Contact = () => {
  const [msg, setmsg] = useState("");

  const SentMsg = (e) => {
    e.preventDefault();
    setmsg("Thank you for Message . We will Reach out to in Short time");
  };
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-10">
      <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <form className="bg-gray-800 p-5 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-500 outline-none"
            required
          />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-500 outline-none"
            required
          />
          <textarea
            rows="4"
            placeholder="Your message..."
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-500 outline-none"
            required
          ></textarea>
          <button
            onClick={SentMsg}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700  cursor-pointer transition text-white font-medium py-3 rounded"
          >
            Send Message
          </button>
          {msg && <p className="text-emerald-300 text-md">{msg}</p>}
        </form>

        <div className="bg-gray-800 p-5 rounded-xl shadow-lg flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Reach Out</h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              📧 <span className="text-white">support@GameArc.com</span>
            </li>
            <li>
              📞 <span className="text-white">+23 3435 2342</span>
            </li>
            <li>
              🌐 <span className="text-white">GameArc, Worldwide (Online)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
