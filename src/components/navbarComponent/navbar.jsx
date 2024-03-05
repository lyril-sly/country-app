import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar ()  {
  return (
    <>
    <ul className='nav'>
      <li><Link to='/'>Home</Link></li> 
      <li><Link to='/country'>Countries</Link></li> 
      <li><Link to='/about'>About</Link></li> 
      <li><Link to='/city'>Country</Link></li> 
    </ul>
    </>
  )
}
