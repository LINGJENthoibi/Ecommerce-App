import React from 'react'
import Navbar from './Layouts/Navbar'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import AllBooks from './Pages/AllBooks';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';


function App () {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/all-books" element={<AllBooks/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>
  )
}
   
export default App
