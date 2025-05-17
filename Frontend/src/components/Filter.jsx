import React, { useCallback } from 'react';
import { Filtercontext } from '../context/Filtercontext';
import { useContext } from 'react';


const Filter = () => {
  const {  setprice, setcategory, setrating } = useContext(Filtercontext); 


 const cat=((e)=> setcategory(e.target.value));
 const pri=((e)=> setprice(e.target.value));
 const rate=((e)=> setrating(e.target.value));



  return (
   
    <>
      <div className='w-[30%] lg:flex flex-col hidden  flex-wrap p-3  shadow-xl '>
        {/* filters section */}
        <h1 className='text-white font-bold text-2xl p-3'>Filters</h1>
        <div className='min-h-[30vh] rounded-md w-[90%]  flex flex-col space-y-5 p-3'>
          <select
            onChange={cat}
            name="filters"
            id=""
            className='w-[90%] h-10 cursor-pointer text-white p-2 outline-none rounded-lg hover:bg-gray-600'
            defaultValue=""
          >
            <option value="" disabled hidden>Category</option>
            <option value="Action"  style={{ backgroundColor: '#1f2937' }}>Action</option>
            <option value="Adventure"  style={{ backgroundColor: '#1f2937' }}>Adventure</option>
            <option value="Horror" style={{ backgroundColor: '#1f2937' }}>Horror</option>
            <option value="Fighting"  style={{ backgroundColor: '#1f2937' }}>Fighting</option>
            <option value="RPG"  style={{ backgroundColor: '#1f2937' }}>RPG</option>
          </select>

          <select
            onChange={pri}
            name="filters"
            id=""
            className='w-[90%] h-10  cursor-pointer text-white p-2 outline-none rounded-lg hover:bg-gray-600'
            defaultValue=""
          >
            <option value="" disabled hidden>Price</option>
            <option value="10"  style={{ backgroundColor: '#1f2937' }}>$0 - $10</option>
            <option value="20" style={{ backgroundColor: '#1f2937' }}>$10 - $20</option>
            <option value="30"  style={{ backgroundColor: '#1f2937' }}>$20 - $30</option>
            <option value="40"  style={{ backgroundColor: '#1f2937' }}>Above $30</option>
          </select>

          <select
          onChange={rate}
            name="filters"
            id=""
            className='w-[90%] h-10  cursor-pointer  shadow-2xl text-white p-2 outline-none rounded-lg hover:bg-gray-600'
            defaultValue=""
          >
            <option value="" disabled hidden>Ratings</option>
            <option value="4" style={{ backgroundColor: '#1f2937' }}>⭐ 4 Stars</option>
            <option value="3"  style={{ backgroundColor: '#1f2937' }}>⭐ 3 Stars</option>
            <option value="2"  style={{ backgroundColor: '#1f2937' }}>⭐ 2 Stars</option>
            <option value="1" style={{ backgroundColor: '#1f2937' }} >⭐ 1 Star</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
