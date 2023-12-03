import React from 'react'
import vid1 from '../assets/Welcome.mp4'


function Home() {
  return (
    <div   className="grid  justify-center font-serif items-center  text-center   w-screen ">
        <video  className='flex relative object-cover min-h-screen min-w-screen' src={vid1} autoPlay loop />
          
        {!localStorage.getItem('name')   ?
         <div></div>

         :
         <div className='absolute mx-20 sm:mx-80 rounded-2xl  bg-black/70 h-fit top-1/2 hover:bg-green-600/70 shadow-lg sm:top-1/3'> 
         <a href="/Archive" className='  text-white text-xl sm:text-6xl  font-bold    '><button>Care To Know KSA's Achievement?!</button></a>
         </div>
        }

    </div>
  )
}

export default Home