import React, { useContext } from 'react';
import { Filtercontext } from '../context/Filtercontext';

const Smfilter = () => {
  const { setprice, setcategory, setrating } = useContext(Filtercontext);

  return (
    <div className="w-full max-w-full overflow-hidden rounded-md flex flex-col p-4 space-y-4 text-white">
    <h2 className="text-xl font-semibold mb-2">Filters</h2>

    <select
      onChange={e => setcategory(e.target.value)}
      defaultValue=""
      className="w-full max-w-full h-10 rounded-md bg-gray-800 p-2 text-white outline-none"
    >
      <option value="" disabled hidden>Category</option>
      <option value="Action">Action</option>
      <option value="Adventure">Adventure</option>
      <option value="Horror">Horror</option>
      <option value="Fighting">Fighting</option>
      <option value="RPG">RPG</option>
    </select>

    <select
      onChange={e => setprice(e.target.value)}
      defaultValue=""
      className="w-full max-w-full h-10 rounded-md bg-gray-800 p-2 text-white outline-none"
    >
      <option value="" disabled hidden>Price</option>
      <option value="10">$0 - $10</option>
      <option value="20">$10 - $20</option>
      <option value="30">$20 - $30</option>
      <option value="40">Above $30</option>
    </select>

    <select
      onChange={e => setrating(e.target.value)}
      defaultValue=""
      className="w-full max-w-full h-10 rounded-md bg-gray-800 p-2 text-white outline-none"
    >
      <option value="" disabled hidden>Ratings</option>
      <option value="4">⭐ 4 Stars</option>
      <option value="3">⭐ 3 Stars</option>
      <option value="2">⭐ 2 Stars</option>
      <option value="1">⭐ 1 Star</option>
    </select>
  </div>
  );
};

export default Smfilter;
