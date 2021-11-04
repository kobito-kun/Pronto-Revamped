import React from 'react';
import {Link} from 'react-router-dom';
// import DefaultCover from '../../assets/default.png';

function Product({product}) {
  return (
    <div className="border-l-2 border-red-400 hover:border-red-600 duration-300 hover:shadow-xl hover:-translate-y-2 transform shadow-lg w-80 bg-white p-4 flex flex-col gap-2">
      <div className="h-36 flex relative justify-center items-center overflow-y-hidden shadow">
        <img src={product.image} alt="Cover" className="select-none absolute" />
      </div>
      <h3 className="text-xl truncate text-primary">{product.title}</h3>
      <p className="text-xs truncate">{product.description}</p>
      <Link to={`/product/${product._id}`}>
        <button className="hover:bg-white shadow-lg hover:text-black duration-300 bg-black w-full mx-auto py-2 text-white">Order Now ${product.price}</button>
      </Link>
    </div>
  )
}

export default Product
