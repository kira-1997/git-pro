import { React, useState } from "react";
import List from './List'

function Archive() {
  if(!localStorage.getItem('name')){
    window.open('/','_self')
  }
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

   
  return (
    <>
      
      <div className="grid w-screen h-full sm:h-full mb-5 justify-center  ">
        <input
         onChange={inputHandler}
         placeholder="Search"
         className='sm:mx-96 mx-20 h-fit my-6 rounded-lg border outline outline-gray-400  px-3 py-2 shadow-sm focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600  focus:shadow-inner	' 
         />
         <List  input={inputText} />

    </div>
     
    </>
  )
}

export default Archive