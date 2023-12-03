import React from 'react'
import KSA from './KSA'
import { useParams } from 'react-router-dom'

function More() {
  if(!localStorage.getItem('name')){
    window.open('/','_self')
  }
    const {id} =useParams();
    const achive=KSA.find((item)=>item.id==id)
  return (
    <div className='sm:flex justify-center items-center sm:my-6  sm:h-screen h-screen '>
        <div className='relative pb-5/6 '> 
        <img className='h-96 sm:h-screen w-screen shadow-2xl sm:rounded-r-full ' src={achive.Image}/>
        </div>
          <div className='relative px-9 -mt-20  sm:-mt-16 sm:-ml-56   text-left '>
            <div className='bg-white h-50  sm:w-96 sm:h-fit p-2 items-center  rounded-xl shadow-xl'>
            <h1 className='text-2xl sm:text-6xl  sm:my-4  font-bold text-green-600  drop-shadow-lg  font-serif'>{achive.name}</h1>
            <h1 className='m-3 my-7 text-sm sm:text-xl font-serif text-justify drop-shadow-md'>{achive.description}</h1>
            <a className=' m-3  font-lightbold   font-serif   text-black  hover:text-blue-700'  href={achive.Link}>VISIT WEBSITE FOR MORE INFO </a>
            </div>
        </div>
   </div>    
     
    
  )
}

export default More