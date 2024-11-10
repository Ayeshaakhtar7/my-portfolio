import React from 'react'
import Image from 'next/image'
import { AiOutlineMenu , AiOutlineClose} from "react-icons/ai";
import {useState} from "react";


const Navbar = () => {
  const[isMenuOpen , setIsMenuOpen]= useState(false)

  const toggleMenu =()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
   <div className='container pt-8' >
    <div className='flex justify-between items-center'>
      <div className='text-xl font-medium'>Ayesha</div>
      <ul className='gap-10 lg:gap-16 hidden md:flex'>
        <li className='menuLink'><a href='/hero'></a>Home</li>
        <li className='menuLink'><a href='/about'></a>About</li>
        <li className='menuLink'><a href='/skills'></a>Skills</li>
        <li className='menuLink'><a href='/contact'></a>Contact</li>
      </ul>
    <div className='md:hidden' onClick={toggleMenu}>
      {isMenuOpen ? <AiOutlineClose size={30}/> :
      <AiOutlineMenu size={30}/>
      }
    </div>
    </div>
     
     {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li className='menuLink'>
          <a href="#hero"onClick={toggleMenu}>Home</a>
        </li>

        <li className='menuLink'>
          <a href="#about"onClick={toggleMenu}>Abbout</a>
        </li>

        <li className='menuLink'>
          <a href="#skills"onClick={toggleMenu}>Skills</a>
        </li>

        <li className='menuLink'>
          <a href="#contact"onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
     )}

    </div>
  )
}

export default Navbar