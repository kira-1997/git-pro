import React from 'react'
import { useNavigate } from 'react-router-dom'
useNavigate
import { useState } from 'react'
import vid from '../assets/MasterPlan1.mp4'
import vid1 from '../assets/blurs.mp4'

function Signin() {
    const navigate= useNavigate()
    const [inputs,setInputs]=useState({
        Name:'',
        Password: ''
      })
     

    const [message, setMsg] = useState('');
     
      const saveInput= (e)=>{
        setInputs({...inputs,
         [e.target.name]:e.target.value
        })}
   
  
   function check(){
      if(inputs.Name==localStorage.getItem('name') && inputs.Password==localStorage.getItem('pass') ){
          navigate('/')

      }
      else{
        setMsg("You don't have an account!")
    }
   }
  return (
    <div className="flex  h-fit  w-screen min-h-screen  justify-center items-center">
       
    <video className='flex  object-cover min-h-screen  min-w-full' src={vid1} autoPlay loop muted/>

 
    <div className="grid  absolute sm-w-1/3 sm-h-fit h-fit w-96  rounded-xl   justify-center  bg-black/70">
   <video className='flex object-cover  min-h-1/3 min-w-screen  ' src={vid} autoPlay loop />
    <div className="grid   gap-3  items-center justify-center  font-bold text-xl ">
    
          <p className="text-4xl text-white my-2 text-center ">SignIn</p>
          <input className='rounded-lg w-80 rounded-md  border  px-3 py-2 shadow-sm focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600  focus:shadow-inner	' onChange={saveInput} name='Name'  type="text" placeholder='Name' />
          <input type='password' className='text-black rounded-md w-80 rounded-md  border  px-3 py-2 shadow-sm focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600  focus:shadow-inner	' placeholder='Password' name='Password' onChange={saveInput}  />
         
          <button onClick={check} className='bg-green-600  h-10 text-white  rounded-lg transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  '>Submit</button>
           <p className='text-red-600 text-center w-80'>{message}</p>
       </div>
          </div>
          </div>
       
  )
}

export default Signin