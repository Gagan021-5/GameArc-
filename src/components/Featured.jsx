import React from 'react'
import allgames from './games'
import { useState,useEffect } from 'react';
const Featured = () => {
  const [selected, setselected] = useState([32,46,26,34,35,55]);
            const [display, setdisplay] = useState([]);

            useEffect(() => {
              let playground = allgames.filter(game=>selected.includes(game.id));
              setdisplay(playground);
    
            }, [selected])
    
  
  return (
 <>

<div className='w-full h-auto bg-gray-900 pb-6'>
        <h1 className='text-white  text-3xl font-bold p-5 mx-auto' >Top Featured</h1>
        
         <div className='text-white lg:h-auto w-[95%] mx-6 flex gap-6  max-sm:flex-wrap  md:flex-wrap md:justify-center lg:justify-center xl:flex-nowrap '>
         {display.map((val, index) => (
          <div key={index} className='text-white pb-3 bg-gray-800 w-60   max-sm:w-40 md:w-52 lg:w-60 h-auto rounded-t-2xl rounded-b-lg transition duration-300  hover:scale-105 ease-out cursor-pointer'>
            <div className='img w-full rounded-t-2xl h-[70%] sm:h-[180px] md:h-[200px] lg:h-[70%] '>
              <img src={val.url} alt="img" className='object-cover w-full h-full rounded-t-2xl' />
            </div>
            <div className='p-2'>
              <h1 className='font-bold text-white  md:text-sm lg:text-base whitespace-nowrap'>{val.name}</h1>
              <div className='flex  justify-between mt-5'>
                <h1 className='text-white my-auto size-3 text-md '>${val.price}</h1>
                <button className='btn text-white  font-semibold    sm:text-sm  w-auto h-auto  cursor-pointer  bg-gray-600  rounded-xs p-2 hover:bg-gray-900 '>Add to cart</button>
              </div>
            </div>
          </div>
        ))}

         </div>
    </div>
    
    
      

 
 </>
  )
}

export default Featured

