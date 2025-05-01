import React from 'react'
import { FaBell } from "react-icons/fa";

const Upcoming = () => {
    const upcoming=[
      {  "id":70,
        "name": "Subnautica 2",
        "url": "https://upload.wikimedia.org/wikipedia/en/e/e8/Subnautica_2_cover_art.jpg",
        "date": "Coming On 30 June",
        "remind": "Remind Me"
      },
      { 
        "id":71,
        "name": "Hades II",
        "url": "https://upload.wikimedia.org/wikipedia/en/0/0c/Hades_2_cover_art.jpeg",
        "date": "Coming On 15 May",
        "remind": "Remind Me"
      },
      { 
        "id":72,
        "name": "Clair Obscur: Expedition 33",
        "url": "https://upload.wikimedia.org/wikipedia/en/5/5a/Clair_Obscur%2C_Expedition_33_Cover_1.webp",
        "date": "Coming On 20 May",
        "remind": "Remind Me"
      },
      {
        "id":73,
        "name": "Borderlands 4",
        "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwLeh_Dqt53s8vGRwY_oCrMHUN63MEli6fBog-bXM4hHgxCrru",
        "date": "Coming On 28 May",
        "remind": "Remind Me"
      },
      {
        "id":74,
        "name": "Dune: Awakening",
        "url": "https://upload.wikimedia.org/wikipedia/en/e/ef/Dune_Awakening_cover_art.jpg",
        "date": "Coming On 28 May",
        "remind": "Remind Me"
      },
      {
        "id":75,
        "name": "STALKER 2",
        "url": "https://upload.wikimedia.org/wikipedia/en/8/80/STALKER_2_cover_art.jpg",
        "date": "Coming On 28 May",
        "remind": "Remind Me"
      }

     ]

     const clicked=()=>{
      const notify = () => toast("Wow so easy!");
     }
  return (
    <>
     <div className='w-full h-auto bg-gray-900 pb-6'>
        <h1 className='text-white  text-3xl font-bold p-5 mx-auto' >Coming Soon</h1>
        
         <div className='text-white lg:h-auto w-[95%] mx-6 flex gap-6  max-sm:flex-wrap  md:flex-wrap md:justify-center lg:justify-center xl:flex-nowrap '>
         {upcoming.map((val, index) => (
          <div key={index} className='text-white pb-3 bg-gray-800 w-60   max-sm:w-40 md:w-52 lg:w-60 h-auto rounded-t-2xl rounded-b-lg transition duration-300  hover:scale-105 ease-out cursor-pointer'>
            <div className='img w-full rounded-t-2xl h-[70%] sm:h-[180px] md:h-[200px] lg:h-[70%] '>
              <img src={val.url} alt="img" className='object-cover w-full h-full rounded-t-2xl' />
            </div>
            <div className='p-2 '>
              <h1 className='font-bold text-white  md:text-sm lg:text-base  truncate whitespace-nowrap overflow-hidden'>{val.name}</h1>
              <div className='flex  justify-between mt-5 pb-3 '>
                <button onClick={clicked} className='btn text-white  font-semibold   sm:text-sm  w-auto h-auto cursor-pointer bg-gray-600  rounded-xs p-2 hover:bg-gray-900 '>{val.remind}<FaBell className='my-auto inline'/></button>
              </div>
              <span className='text-white my-auto'>{val.date}</span>
            </div>
          </div>
        ))}
         </div>
    </div>
    
    </>
  )
}

export default Upcoming
