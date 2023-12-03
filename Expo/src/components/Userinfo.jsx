import React from 'react'
import { useState } from 'react'

function Userinfo() {
const [size, setSize] = useState(10);
if(!localStorage.getItem('name')){
   window.open('/','_self')
}
  return (
    <div  className="grid justify-center font-serif items-center sm:h-full  bg-cover bg-no-repeat w-screen  bg-[url('https://www.rcrc.gov.sa/wp-content/uploads/2023/06/Expo-Site-Night-Time.jpg')]">
    <div   className='grid  w-fit h-fit gap-10 p-4 mx-5 rounded-lg  text-white font-bold justify-center items-center'>
        
    <div className='w-80 bg-black/60 sm:w-96 rounded-lg  p-5 '>
      <div className="px-4 sm:px-0">
        <h3 style={{ fontSize: `${size}px` }} className="text-base font-semibold leading-7 text-center">My Information</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt style={{ fontSize: `${size}px` }} className="text-sm font-lightbold leading-6 ">Name</dt>
            <h1 style={{ fontSize: `${size}px` }}>{localStorage.getItem('hono')} {localStorage.getItem('name')}</h1>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt style={{ fontSize: `${size}px` }} className="text-sm font-lightbold  ">Email</dt>
            <h1 style={{ fontSize: `${size}px` }}> {localStorage.getItem('email')}</h1>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt style={{ fontSize: `${size}px` }} className="text-sm font-lightbold ">Gender</dt>
            <h1 style={{ fontSize: `${size}px` }}>{localStorage.getItem('gender')}</h1>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt style={{ fontSize: `${size}px` }} className="text-sm font-lightbold "> Continent</dt>
            <h1 style={{ fontSize: `${size}px` }}> {localStorage.getItem('contin')}</h1>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt style={{ fontSize: `${size}px` }} className="text-sm font-lightbold ">Country</dt>
            <h1 style={{ fontSize: `${size}px` }}> {localStorage.getItem('country')}</h1>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt style={{ fontSize: `${size}px` }} className="text-sm font-lightbold ">Age Groupe</dt>
            <h1 style={{ fontSize: `${size}px` }}> {localStorage.getItem('age')}</h1>
          </div>
          <div className='flex gap-2 py-3 text-xl '>
          <button  className='rounded-2xl w-1/2 h-10 text-blue-900 bg-white' onClick={()=>setSize((size) => size+1)}>A+</button>
          <button  className='rounded-2xl w-1/2 h-10 text-blue-900 bg-white' onClick={()=>setSize((size) => size-1)}>A-</button>
          </div>
         
        </dl>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Userinfo