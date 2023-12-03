import React from 'react'
import { useNavigate } from 'react-router-dom'
useNavigate
import { useState } from 'react'
import vid from '../assets/MasterPlan1.mp4'
import vid1 from '../assets/blurs.mp4'

function SignUp() {
    const navigate= useNavigate()
    const [inputs,setInputs]=useState({
        Name:'',
        Email: '',
        Password:'',
        Continent:'',
        Country:'',
        Gender:'',
        Honorific:'',
        Age:''
      })
     

    const [message, setMsg] = useState('');
    const emailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passValid=/^(?=.*[0-9])(?=.*[A-Z]).{6,}$/
     
      const saveInput= (e)=>{
        setInputs({...inputs,
         [e.target.name]:e.target.value
        })}
   
  
   function check(){
      if(inputs.Name.length<4 ){
          setMsg("Your name should be more than 4 letters")
      }
      else if(!emailValid.test(inputs.Email)){
        setMsg("Your email is invalid")
      }
      else if(!passValid.test(inputs.Password)){
        setMsg("Your password is invalid, It should contain at least 5 numbers and one uppercase letter")
      }
     else if(inputs.Continent.length<1){
        setMsg("Please choose a continent")
    }
     else if(inputs.Country.length<1){
        setMsg("Please choose a country")
    }
    else if(inputs.Gender.length<1){
      setMsg("Please choose a gender")
   }
  else if(inputs.Honorific.length<1){
    setMsg("Please choose a honorific")
  }    
    else  if(inputs.Age.length<1){
        setMsg("please choose your age group")
    }
      else{
        localStorage.clear()
        localStorage.setItem('name',inputs.Name)
        localStorage.setItem('pass',inputs.Password)
        localStorage.setItem('email',inputs.Email)
        localStorage.setItem('contin',inputs.Continent)
        localStorage.setItem('country',inputs.Country)
        localStorage.setItem('gender',inputs.Gender)
        localStorage.setItem('hono',inputs.Honorific)
        localStorage.setItem('age',inputs.Age)
          navigate('/SignIn')
          
      }
   }
   
      return (
          <>
       <div className="flex  h-fit  w-screen min-h-screen  justify-center items-center">
       
       <video className='flex  object-cover min-h-screen  min-w-full' src={vid1} autoPlay loop muted/>

    
       <div className="grid  absolute sm-w-1/3 sm-h-fit h-fit w-96  rounded-lg   justify-center  bg-black/70">
      <video className='flex object-cover rounded-lg min-h-1/3 min-w-screen  ' src={vid} autoPlay loop />
       <div className="grid   gap-3  items-center justify-center  font-bold text-xl ">
          <p className="text-4xl text-white my-2 text-center">Create Account</p>
          <input className='rounded-lg border  px-3 py-2 shadow-sm focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600  focus:shadow-inner	' onChange={saveInput} name='Name'  type="text" placeholder=' Name' />
          <input type='text' className='text-black rounded-md   border  px-3 py-2 shadow-sm focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600  focus:shadow-inner	' placeholder=' Email Address' name='Email' onChange={saveInput}   />
          <input type='password' className='text-black rounded-md  border  px-3 py-2 shadow-sm focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600  focus:shadow-inner	 ' placeholder=' Password' name='Password' onChange={saveInput}  />
         <label className='flex gap-2 '>
         <select onChange={saveInput}  name='Continent' className='rounded-md w-1/2  border  px-3 py-2 shadow-sm focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600  focus:shadow-inner	'>
        <option value="" >Continent</option>
        <option value='Asia' >Asia</option>
        <option value='Europe'>Europe</option>
        <option value='North America' >North America</option>
        <option value='South America'>South America</option>
        <option value='Africa'>Africa</option>
        <option value='Australia'>Australia</option>
      </select>
      <select  disabled={inputs.Continent === ""} onChange={saveInput} name='Country' className='rounded-md w-1/2  border  px-3 py-2 shadow-sm focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600  focus:shadow-inner	'>
        <option value="">State</option>
        {inputs.Continent === "Asia" && (
          <><option key="KSA">Middle East</option><option key="UAE">UAE</option><option key="Japan">Japan</option><option key="Russia">Russia</option><option key="China">China</option><option key="Korea">Korea</option></>
        )}
        {inputs.Continent === "Europe" && (
          <><option key="Germany">Germany</option><option key="Italy">Italy</option><option key="UK">UK</option><option key="France">France</option><option key="Spain">Spain</option><option key="Romania">Romania</option></>
        )}
        {inputs.Continent === "North America" && (
          <><option key="USA">USA</option><option key="Canada">Canada</option><option key="Mexico">Mexico</option><option key="Alaska">Alaska</option><option key="Cuba">Cuba</option><option key="Bahamas">Bahamas</option></>
        )}
          {inputs.Continent === "South America" && (
          <><option key="Colombia">Colombia</option><option key="Brazil">Brazil</option><option key="Argentina">Argentina</option><option key="Venezuela">Venezuela</option><option key="Bolivia">Bolivia</option><option key="Chile">Chile</option></>
        )}
            {inputs.Continent === "Africa" && (
          <><option key="Egypt">Egypt</option><option key="Morocco">Morocco</option><option key="Sudan">Sudan</option><option key="Libya">Libya</option><option key="Algeria">Algeria</option><option key="Ethiopia">Ethiopia</option></>
        )}
            {inputs.Continent === "Australia" && (
          <><option key="Australia">Australia</option><option key="Fiji">Fiji</option><option key="NewZealan">New Zealan</option></>
        )}
      </select>
      </label>
        
        <label className='flex gap-2  '>
        <select onChange={saveInput} value={inputs.Gender} name='Gender' className='rounded-md w-1/2  border  px-3 py-2 shadow-sm focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600  focus:shadow-inner	'>
        <option value="">Gender</option>
        <option value='Male' >Male</option>
        <option value='Female'>Female</option>
        </select>
        <select   disabled={inputs.Gender === ""} onChange={saveInput} name='Honorific' className='rounded-md w-1/2  border  px-3 py-2 shadow-sm focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600  focus:shadow-inner'>
        <option value="">Honorific</option>
        {inputs.Gender === "Female" && (
          <><option key="Miss">Miss</option><option key="Mrs">Mrs</option><option key="Ms">Ms</option></>
        )}
            {inputs.Gender === "Male" && (
          <><option key="Mr">Mr</option></>
        )}
        </select>
        </label>
      
      <select onChange={saveInput}  name='Age' className='rounded-md  border  px-3 py-2 shadow-sm focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600  focus:shadow-inner	 '>
        <option >Select Age Group</option>
       <><option  key="7-16"  >7-16</option></> 
       <><option  key="17-30" >17-30</option></> 
        <><option  key="31-60" >31-60</option></>
        <><option  key="Above 60">Above 60</option></> 
        </select>
       
          <button onClick={check} className='bg-green-600  h-10 text-white  rounded-lg transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 '>Submit</button>
           <p  className='text-red-600 text-center '>{message}</p>
       </div>
       </div>
          </div>
       
            
          </>
  )
}

export default SignUp