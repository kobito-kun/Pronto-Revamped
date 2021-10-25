import React from 'react'
import Square from '../../assets/square.png';
import StackGrid from "react-stack-grid";

function Products() {
  return (
    <div className="mt-24 max-w-screen-xl mx-auto">
      <div className="flex justify-center items-center">
        <img src={Square} alt="Square" className="w-40" />
      </div>
      <h3 className="uppercase font-semibold text-2xl text-center my-2">All Products</h3>
      <hr className="my-4" />
      <StackGrid
        columnWidth={150}
      >
        <div key="key1" className="h-40 bg-pink-300">Item 1</div>
        <div key="key2" className="h-20 bg-blue-300">Item 2</div>
        <div key="key3" className="h-60 bg-red-300">Item 3</div>
        <div key="key4" className="h-40 bg-pink-300">Item 1</div>
        <div key="key5" className="h-20 bg-blue-300">Item 2</div>
        <div key="key6" className="h-60 bg-red-300">Item 3</div>
        <div key="key7" className="h-40 bg-pink-300">Item 1</div>
        <div key="key8" className="h-20 bg-blue-300">Item 2</div>
        <div key="key9" className="h-60 bg-red-300">Item 3</div>
        <div key="key10" className="h-40 bg-pink-300">Item 1</div>
        <div key="key11" className="h-20 bg-blue-300">Item 2</div>
        <div key="key12" className="h-60 bg-red-300">Item 3</div>
      </StackGrid>
    </div>
  )
}

export default Products