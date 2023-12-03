import React from 'react'
import { useNavigate } from 'react-router-dom'
useNavigate

function Navbar() {
  const navigate= useNavigate()
  const user=localStorage.getItem('name')
  function out(){
    localStorage.clear()
    navigate('/')
  }
    return (
      
            <>
              <div className="  mx-auto max-w-7xl w-screen bg-black px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  </div>
                  <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <a href="/"><img 
                        className="h-8 w-auto"
                        src="../src/assets/download.png" /></a>
                    </div>
                    <div className="ml-4 sm:ml-6 sm:block">

                      <div className="flex space-x-4 text-white">
                      <a href="/Userinfo" className='hover:font-bold hover:text-green-600 '>{user}</a> 
                      </div>
                              
                    </div>
                  </div>
                  <div className="absolute inset-y-0 space-x-4 right-0 text-white flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      {!localStorage.getItem('name')?
                      <div className='space-x-4'>
                         <button onClick={()=>navigate('/SignIn')}className="rounded-md bg-white px-3.5 py-2.5 text-sm font-bold text-black shadow-sm hover:bg-green-600 hover:text-white transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 ">Sign In</button>
                         <button onClick={()=>navigate('/SignUp')}className="rounded-md bg-white px-3.5 py-2.5 text-sm font-bold text-black shadow-sm hover:bg-green-600 hover:text-white transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 ">Sign Up</button>
                        </div>
                        :
                        <button onClick={out} className="rounded-md bg-white px-3.5 py-2.5 text-sm font-bold text-black shadow-sm hover:bg-green-600 hover:text-white transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  duration-300">Sign Out</button>   
                         }
                  </div>
                </div>
              </div>
    
             
            </>
          
      )
    }



export default Navbar