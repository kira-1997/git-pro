import Navbar from './components/Navbar'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Signin from './components/Signin'
import Archive from './components/Archive'
import Error from './components/Error'
import Userinfo from './components/Userinfo'
import More from './components/More'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Foot from './components/Foot'

function App() {

  return (
    <>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/SignIn" element={<Signin/>} ></Route>
        <Route path="/SignUp" element={<SignUp/>} ></Route>
        <Route path="/Archive" element={<Archive/>} ></Route>
        <Route path="/*" element={<Error/>} ></Route>
        <Route path="/Userinfo" element={<Userinfo/>} ></Route>
        <Route path="/More/:id" element={<More/>} ></Route>
      </Routes>
      <Foot/>
    </>
  )
}

export default App
