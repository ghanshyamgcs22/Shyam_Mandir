
import About from "./about/About";
import AddPost from "./components/AddPost";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./contact/Contact";
import { useAuth } from "./context/AuthProvider";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import toast, { Toaster } from 'react-hot-toast';
import {Navigate, Route, Routes } from "react-router-dom"

export default function App() {
  const [authUser,useAuthUser] = useAuth();
  console.log(authUser)
  return (
     <>
     
   {/* <Home/>
   <Course/> */}
   <Routes >
    
   
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={  <Courses/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/addpost" element={<AddPost/>}></Route>
   
   </Routes>
   <Toaster />
     </>
  )
}