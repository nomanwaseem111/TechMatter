import React from 'react'
import {

    Link
  } from "react-router-dom";
  import logo from '../Navbar/logo.png'



const Navbar = () => {
  return (
    <>
    <div className='parent'>
       <div id='c-1'>
        <img src={logo} id="logo"  alt="" />
       </div>
       <nav id='c-2'>
          <ul id="underline">
            <li>
              <Link to="/" className='link'>Home</Link>
            </li>
            <li>
              <Link to="/solution" className='link'>Solution</Link>
            </li>
            <li>
              <Link to="/about" className='link'>About</Link>
            </li>
            <li>
              <Link to="/contact" className='link'>Contact</Link>
            </li>
            <li>
              <Link to="/blog" className='link'>Blog</Link>
            </li>
          </ul>
        </nav>

    </div>
    
</>
  )
}

export default Navbar
