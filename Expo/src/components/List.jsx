import React from 'react'
import KSA from './KSA'
import { Link } from 'react-router-dom'

function List(props) {
    const filteredData = KSA.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
  return (
    <div className='grid  grid-cols-1 sm:grid-cols-3  gap-3'>  
    {filteredData.map((achive)=>(
       <div key={achive.id}>
        <div className='relative pb-5/6 '> 
        <img className='w-80 w-96 h-60 rounded-xl shadow-xl' src={achive.Image}/>
        </div>
          <div className='relative px-9 -mt-16  text-center '>
            <div className='grid gap-2 bg-white p-2 items-center  w-80 rounded-xl shadow-xl'>
            <h1 className='text-xl  font-bold text-green-600  drop-shadow-lg  font-serif'>{achive.name}</h1>
             <Link className=' mx-24  font-lightbold  drop-shadow-lg  font-serif rounded-md px-2 py-1  border border-2  border-gray-600 hover:border-none  text-black shadow-sm hover:bg-black hover:text-white transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  duration-300' to={`/More/${achive.id}`}>More Info</Link>
            </div>
        </div>
             </div>
    ))}
  </div>
  )
}

export default List