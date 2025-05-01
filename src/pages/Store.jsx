import React from 'react'
import allgames from '../components/games'
import { useState,useEffect} from 'react'
import axios from 'axios'

const Store = () => {
   const [load, setload] = useState(allgames);
   const [empty, setempty] = useState([]);
   const [next, setnext] = useState(9);
   const [first , setfirst] = useState(()=>allgames.filter(game=> game.id));
   const [onmore, setonmore] = useState(true)

   

   useEffect(() => {
      setempty(first.slice(0,next));
   }, [next])
   
  const loadmore = ()=>{
    setTimeout(() => {
      setnext(prev => prev + 9);
      if(next >= load.length){
        setonmore(!onmore);
      }
    }, 200);
  }


 
  return (
  <>
    <div className='bg-gray-900 flex lg:justify-center min-h-screen w-full p-0 sm:p-7 '  >
    <div className=' min-h-[90vh] h-auto rounded-2xl flex  p-1 lg:p-3 w-full lg:w-[90%]' >
     <div className='  w-[30%]  lg:flex flex-col md:hidden flex flex-wrap  p-3 max-sm:hidden '>
      {/* filters section */}
      <h1 className='text-white  font-bold text-2xl p-3 '>Filters</h1>
      <div className='min-h-[30vh] rounded-md w-[90%]  flex flex-col space-y-5  p-3'>
      <select
  name="filters"
  id=""
  className='w-[90%] h-10 cursor-pointer  text-white p-2 outline-none rounded-lg hover:bg-gray-600'
  defaultValue=""
>
  <option value="" disabled hidden>Category</option>
  <option value="action">Action</option>
  <option value="adventure">Adventure</option>
  <option value="horror">Horror</option>
  <option value="fighting">Fighting</option>
  <option value="rpg">RPG</option>
</select>



<select
  name="filters"
  id=""
  className='w-[90%] h-10  text-white p-2 outline-none rounded-lg hover:bg-gray-600'
  defaultValue=""
>
  <option value="" disabled hidden>Price</option>
  <option value="action">$0 - $10</option>
  <option value="adventure">$10 - $20</option>
  <option value="horror">$20 - $30</option>
  <option value="fighting">Above $30</option>
</select>

<select
  name="filters"
  id=""
  className='w-[90%] h-10 shadow-2xl text-white p-2 outline-none rounded-lg hover:bg-gray-600'
  defaultValue=""
>
  <option value="" disabled hidden>Ratings</option>
  <option value="action">⭐ 5 Stars</option>
  <option value="adventure">⭐ 4+ Stars</option>
  <option value="horror">⭐ 3+ Stars</option>
</select>
         {/* Discover games */}
      </div>
     </div>
     <div className=' bg-gray-900 lg:w-[70%] lg:p-2 rounded-lg sm:w-full max-sm:p-0 '>
      <h1 className='text-white  font-bold text-3xl p-3 pb-1'>Browse Games</h1>
       <div className='w-[100%] h-auto lg:p-3 flex flex-wrap lg:gap-6 gap-4 p-3 max-sm:gap-5 sm:justify-center'> 
       {empty.map((val, index) => (
            //  GameCard
          <div key={index} className='text-white lg:pb-3 rounded-lg lg:w-65 max-sm:w-45 md:w-50 flex flex-col justify-between lg:rounded-t-2xl rounded-b-lg transition duration-300 shadow-2xs hover:scale-105 ease-out cursor-pointer'>
          <div className="w-full aspect-[3/4] max-sm:aspect-[3/4] max-md:aspect-[5/3] lg:h-full overflow-hidden rounded-t-2xl">
          <img src={val.url} alt="img" className="w-full h-full object-cover block" />
           </div>

            <div className='lg:p-2 p-1 '>
              <h1 className='font-bold text-white  sm:text-sm truncate text-ellipsis lg:text-base'>{val.name}</h1>
              <div className='flex flex-col sm:flex-row  sm:items-centers sm:gap-2 max-sm:justify-between lg:justify-evenly lg:mt-5 lg:gap-3 mt-3'>
                <h1 className='text-white my-auto   md:text-md lg:text-lg '>${val.price}</h1>
                <button className='btn text-white md:whitespace-nowrap  font-semibold  max-md:whitespace-nowrap sm:text-sm w-auto h-auto  cursor-pointer  bg-gray-600  rounded-xs  lg:p-2 hover:bg-gray-900/30 p-1 '>Add to cart</button>
                <button className='btn text-white  md:whitespace-nowrap font-semibold   max-md:whitespace-nowrap sm:text-sm   w-auto h-auto  cursor-pointer rounded-xs lg:p-2 bg-blue-600 transition duration-150 delay-75 ease-in-out p-1  hover:bg-blue-700 hover:opacity-100 '>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
        {onmore?  ( <div className='text-white w-full flex justify-center '>
          <button onClick={loadmore} className='text-white bg-gray-800 hover:bg-blue-600 p-3 cursor-pointer rounded-md'>Load More</button>
        </div>)
              :(
                <p className='text-white text-lg text-center'></p>
              ) }
       </div>
      
     </div>
    </div>

    </div>
   
  </>
  )
}

export default Store
