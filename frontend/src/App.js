import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import  Contact from "./components/Contact"
import  Signin from "./components/Signin"
import  Signup from "./components/Signup"
import {Route, Routes } from "react-router-dom"
import ErrorPage from "./components/ErrorPage"
import 'bootstrap/dist/css/bootstrap.css'

//Route ko Routes ke andar daalan padta h and jave to render Componnets as elements



// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App(){
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          {/* Used for unnkown paths*/}
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes> 
       
    
     
    </div>
  )
}