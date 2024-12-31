'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import { FiMenu } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image';
import logo from '../../public/logo.jpg'; 
import fashion from '../../public/navigations/1.png';
import electronics from '../../public/navigations/2.png'; 
import bags from '../../public/navigations/3.png'; 
import footwear from '../../public/navigations/4.png'; 
import groceries from '../../public/navigations/5.png';
import beauty from '../../public/navigations/6.png'; 
import wellness from '../../public/navigations/7.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-gray-900">
      {/* Top Bar for Discount Offer */}
      <div className="bg-red-500 text-center py-2 text-sm w-full">
        Get 20% off on your first purchase! Use code: WELCOME20
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <Link href="/">
          <div className="flex items-center text-blue-500 font-bold text-xl mb-4 md:mb-0">
            <Image src={logo} alt="Logo" width={250} height={250} className="mr-2" />
          </div>
          </Link>

          {/* Search Bar */}
          <div className="flex items-center bg-red-100 rounded-[4px] px-4 py-2 w-full max-w-md mb-4 md:mb-0 md:ml-4 md:mr-4 border-2 border-gray-300 focus-within:border-red-500">
            <input 
              type="text" 
              placeholder="Search products here..." 
              className="bg-transparent border-none outline-none text-gray-700 w-full" 
            />
            <button aria-label="search" className="text-gray-700"><FaSearch /></button>
          </div>

          {/* Sign Up / Log In Links */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link href="/signup" className="text-black font-bold text-[17px] hover:text-red-500">Sign Up</Link>
            <span className='text-[30px]'>/</span>
            <Link href="/login" className="text-black font-bold text-[17px] hover:text-red-500">Log In</Link>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
          <Link href="/wishlist" className="relative flex items-center">
            <FaHeart className="text-4xl p-2 border-2 bg-red-50 border-gray-300 rounded-full hover:bg-red-200 hover:scale-110 transition-all" /> {/* Circular border */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </Link>
          <div className="border-l-2 border-gray-300 h-6"></div> 
          <Link href="/cart" className="relative flex items-center">
            <FaShoppingCart className="text-4xl p-2 border-2 bg-red-50 border-gray-300 rounded-full hover:bg-red-200 hover:scale-110 transition-all" /> {/* Circular border */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </Link>
          <div className="border-l-2 border-gray-300 h-6"></div> 
          <Link href="/" className="flex items-center">
            <FaUser className="text-4xl p-2 border-2 bg-red-50 border-gray-300 rounded-full hover:bg-red-200 hover:scale-110 transition-all" /> {/* Circular border */}
          </Link>
        </div>
        </div>
      </div>

      {/* Navigation Links with Subcategories */}
      <div className="bg-white text-black">
        <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between items-center p-4">
          {/* All Categories */}
          <div className="relative w-full sm:w-auto sm:justify-start text-center">
            <button
              onClick={toggleMenu}
             className="flex items-center mx-auto space-x-2 text-black hover:text-red-600 cursor-pointer bg-red-100 rounded-full px-4 py-2 justify-center sm:justify-start"
            >
              <FiMenu />
              <span>All Categories</span>
              <MdKeyboardArrowDown />
            </button>
            {isMenuOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 sm:left-0 sm:translate-x-0 bg-red-50 shadow-lg p-4 mt-2 w-full sm:w-48 z-[100] rounded-lg">
                <div className="flex flex-col space-y-4">
                  {/* Images for All Categories */}
                  <Link href="/" className="flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-red-600">
                    <Image src={fashion} alt="Fashion" width={20} height={20} />
                    <span>Fashion</span>
                  </Link>
                  <Link href="/" className="flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-red-600">
                    <Image src={electronics} alt="Electronics" width={20} height={20} />
                    <span>Electronics</span>
                  </Link>
                  <Link href="/" className="flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-red-600">
                    <Image src={bags} alt="Bags" width={20} height={20} />
                    <span>Bags</span>
                  </Link>
                  <Link href="/" className="flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-red-600">
                    <Image src={footwear} alt="Footwear" width={20} height={20} />
                    <span>Footwear</span>
                  </Link>
                  <Link href="/" className="flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-red-600">
                    <Image src={groceries} alt="Groceries" width={20} height={20} />
                    <span>Groceries</span>
                  </Link>
                  <Link href="/" className="flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-red-600">
                    <Image src={beauty} alt="Beauty" width={20} height={20} />
                    <span>Beauty</span>
                  </Link>
                  <Link href="/" className="flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-red-600">
                    <Image src={wellness} alt="Wellness" width={20} height={20} />
                    <span>Wellness</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

        {/* Individual Categories with Subcategories */}
        <div className='hidden sm:flex space-x-12'>
        <div className="group relative">
            <Link href="/" className="flex items-center space-x-2 text-black hover:text-red-500 hover:bg-red-50 p-2 rounded transition-all duration-300">
              <Image src={fashion} alt="Fashion" width={23} height={23} />
              <span className='font-semibold font-sans'>Fashion</span>
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-red-50 shadow-lg p-4 z-[100] rounded opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-4 transition-all duration-300 w-44"> {/* Increased width */}
              <Link href="/" className="block py-1 hover:text-red-500">Men</Link>
              <Link href="/" className="block py-1 hover:text-red-500">Women</Link>
            </div>
          </div>

          <div className="group relative">
            <Link href="/" className="flex items-center space-x-2 text-black hover:text-red-500 hover:bg-red-50 p-2 rounded transition-all duration-300">
              <Image src={electronics} alt="Electronics" width={23} height={23} />
              <span className='font-semibold font-sans'>Electronics</span>
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-red-50 shadow-lg p-4 rounded z-[100] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-4 transition-all duration-300 w-44"> {/* Increased width */}
              <Link href="/" className="block py-1 hover:text-red-500">Mobiles</Link>
              <Link href="/" className="block py-1 hover:text-red-500">Laptops</Link>
              <Link href="/" className="block py-1 hover:text-red-500">Smart Watch Accessories</Link>
              <Link href="/" className="block py-1 hover:text-red-500">Camera</Link>
            </div>
          </div>

          <div className="group relative">
            <Link href="/" className="flex items-center space-x-2 text-black hover:text-red-500 hover:bg-red-50 p-2 rounded transition-all duration-300">
              <Image src={bags} alt="Bags" width={23} height={23} />
              <span className='font-semibold font-sans'>Bags</span>
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-red-50 shadow-lg p-4 rounded z-[100] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-4 transition-all duration-300 w-44"> {/* Increased width */}
              <Link href="/" className="block py-1 hover:text-red-500">Men Bags</Link>
              <Link href="/" className="block py-1 hover:text-red-500">Women Bags</Link>
            </div>
          </div>

          <div className="group relative">
            <Link href="/" className="flex items-center space-x-2 text-black hover:text-red-500 hover:bg-red-50 p-2 rounded transition-all duration-300">
              <Image src={footwear} alt="Footwear" width={23} height={23} />
              <span className='font-semibold font-sans'>Footwear</span>
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-red-50 shadow-lg p-4 rounded z-[100] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-4 transition-all duration-300 w-44"> {/* Increased width */}
              <Link href="/" className="block py-1 hover:text-red-500">Men Footwear</Link>
              <Link href="/" className="block py-1 hover:text-red-500">Women Footwear</Link>
            </div>
          </div>

          <div className="group relative">
            <Link href="/" className="flex items-center space-x-2 text-black hover:text-red-500 hover:bg-red-50 p-2 rounded transition-all duration-300">
              <Image src={groceries} alt="Groceries" width={23} height={23} />
              <span className='font-semibold font-sans'>Groceries</span>
            </Link>
          </div>

          <div className="group relative">
            <Link href="/" className="flex items-center space-x-2 text-black hover:text-red-500 hover:bg-red-50 p-2 rounded transition-all duration-300">
              <Image src={beauty} alt="Beauty" width={23} height={23} />
              <span className='font-semibold font-sans'>Beauty</span>
            </Link>
          </div>

          <div className="group relative">
            <Link href="/" className="flex items-center space-x-2 text-black hover:text-red-500 hover:bg-red-50 p-2 rounded transition-all duration-300">
              <Image src={wellness} alt="Wellness" width={23} height={23} />
              <span className='font-semibold font-sans'>Wellness</span>
            </Link>
          </div>
        </div>
      </div>
        <hr className="border-t-1 border-gray-300 mt-4" />
      </div>
    </header>
  );
};

export default Navbar;
