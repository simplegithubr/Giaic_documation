"use client"
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const Header = () => {
  const [openmenu , setOpenmenu]= useState(false)
  const trigglemenu =()=> {
         setOpenmenu(!openmenu)

  }
  const closeemenu =()=> {
    setOpenmenu(false)
    

  }
  return (
    <div className="bg-white shadow-md md:w-[1117px] w-full h-full md:h-[50px] mx-auto mt-5  ">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto px-4 py-2 ">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">Hekto</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="/" className="text-pink-500" onClick={closeemenu}>Home</a>
          <a href="about"onClick={closeemenu}>About</a>
          <a href="page404" onClick={closeemenu}>Pages</a>
          <a href="shopgrid" onClick={closeemenu}>Products</a>
          <a href="blogs" onClick={closeemenu}>Blog</a>
          <a href="shop" onClick={closeemenu}>Shop</a>
          <a href="contact" onClick={closeemenu}>Contact</a>
        </nav>

        {/* Search Icon */}
        <div className="md:flex justify-between hidden bg-white border rounded-md  text-sm focus:outline-none   ">
        
          <input type="text" />
          <CiSearch  size={32} className='bg-pink-500 rounded  px-1 text-white'/>

        </div>
{      /**mobile menu */}
        <div className='md:hidden flex items-center mr-3'>
        <HiMenu className='text-black text-3xl cursor-pointer' onClick={trigglemenu}/>
        </div>

        <div className={`${openmenu ? 'block' : 'hidden'} absolute   left-0 top-0 w-full  bg-blue-300 p-5 md:hidden  `}>
            
          <div className='flex justify-end'>
          <HiX className='text-white text-3xl cursor-pointer' onClick={trigglemenu}/>
          </div>
          <nav className='flex flex-row justify-center items-center gap-3 text-white font-bold '>
          <a href="/" className="text-pink-500" onClick={closeemenu}>Home</a>
          <a href="about" onClick={closeemenu}>About</a>
          <a href="page404" onClick={closeemenu}>Pages</a>
          <a href="shopgrid" onClick={closeemenu}>Products</a>
          <a href="blogs" onClick={closeemenu}>Blog</a>
          <a href="shop" onClick={closeemenu}>Shop</a>
          <a href="contact" onClick={closeemenu}>Contact</a>
          </nav>
          <div className="flex flex-row justify-between  bg-white border rounded-md  text-sm focus:outline-none   ">
        
        <input type="text" />
        <CiSearch  size={32} className='bg-pink-500 rounded  px-1 text-white'/>

      </div>
        
          </div>
      </div>
    </div>
  );
};

export default Header;

