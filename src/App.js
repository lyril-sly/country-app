import React from 'react'
//import Home from './pages/homePage/home'
import { Home } from './pages/homePage/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ABOUT } from './pages/homePage/aboutPage/about'
import { Countries } from './pages/countryPage/country'

export default function App () {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/about' element={<ABOUT/>}></Route>
     <Route path='country' element={<Countries/>}></Route>
     </Routes>
     </BrowserRouter>
      
    </>
  )
}

