import React from 'react'
import DefaultCover from '../../assets/default.png';

function Product() {
  return (
    <div className="border-l-2 border-red-400 hover:border-red-600 duration-300 hover:shadow-xl hover:-translate-y-2 transform shadow-lg w-80 bg-white p-4 flex flex-col gap-2">
      <div className="h-32 flex relative justify-center items-center overflow-y-hidden shadow">
        <img src={DefaultCover} alt="Cover" className="select-none absolute" />
      </div>
      <h3 class="text-xl truncate text-primary">Title</h3>
      <p class="text-xs truncate">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <button className="hover:bg-white shadow-lg hover:text-black duration-300 bg-black w-full mx-auto py-2 text-white">Order Now $10</button>
    </div>
  )
}

export default Product
