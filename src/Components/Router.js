//To Route and assign the pages'/','/about','/contact
//Router Syntax used and react-router-dom installed
import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './App';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

const router=()=>{
   return( <div><Navbar></Navbar>
   <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route></Routes></BrowserRouter></div>)    
}

export default router;