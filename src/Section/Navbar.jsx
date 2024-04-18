import React, { useState } from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [nav,setnav]=useState(false)
  const handelclick = () =>{
    setnav(!nav)
  }
  return (
    <header className='py-8 padding-x absolute w-full z-20'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                 <li><a href="/"> Home</a></li>
                 <li><a href="/"> About Us</a></li>
                 <li><a href="/"> Products</a></li>
                 <li><a href="/"> Contact Us</a></li>
            </ul>
            <div className='lg:hidden'>
                <img src={hamburger}  alt="" width={25} height={25} onClick={handelclick}/>
            </div>
            {nav? <div className='bg-black/80 fixed w-full h-screen top-0 left-0 '></div>:''}
            
        </nav>
        <div className={nav? 'fixed top-0 left-0 w-[300px] bg-white/40 z-[20] h-screen duration-700':'fixed top-0 left-[-100%] w-[300px] bg-white z-[1000] h-screen duration-700'} >
        <AiFillCloseCircle  size={30} className='absolute right-4 top-4 cursor-pointer text-white hover:text-red-200' onClick={()=>setnav(!nav)} />

            <nav>
          <ul className='flex flex-col py-[80px] px-[60px] text-white cursor-pointer'>
            <li className='text-xl py-4 flex'><a href="/" className='text-black hover:text-red-200 duration-300'> Home</a></li>
            <li className='text-xl py-4 flex'><a href="/" className='text-black hover:text-red-200 duration-300' > About Us</a></li>
            <li className='text-xl py-4 flex'><a href="/" className='text-black hover:text-red-200 duration-300' > Products</a></li>
            <li className='text-xl py-4 flex'><a href="/" className='text-black hover:text-red-200 duration-300'> Contact Us</a></li>
          </ul>
        </nav>
            </div>
    </header>
  )
}

export default Navbar
