import React from 'react'
import Product from './Product'

function MainSection() {
  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <div className="relative flex flex-col justify-center items-center select-none">
        <h2 style={{zIndex: '-1'}} className="absolute uppercase font-bold text-6xl text-gray-100">most recent</h2>
        <h4 className="text-4xl font-semibold leading-6">Newest Products</h4>
        <p className="text-center text-lg">have a look at our latest products.</p>
      </div>
      <div className="flex flex-wrap mt-10 justify-center items-center">
        <Product />
      </div>
    </div>
  )
}

export default MainSection