import React from 'react'
import SquareLogo from '../assets/square.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div class="p-4 shadow-lg w-full fixed top-0 left-0 bg-white">
      <div class="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={SquareLogo} alt="Square Pronto Logo" class="h-12 select-none" />
        </Link>
        <div class="flex gap-4 items-center">
          <Link to="/products" class="cursor-pointer hover:text-gray-500 duration-300">Products</Link>
          <Link to="/login" class="cursor-pointer hover:text-gray-500 duration-300">Login</Link>
          <Link to="/signup"><button class="hover:bg-white shadow-lg hover:text-black duration-300 bg-black text-white font-bold px-4 py-2">Sign Up</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
