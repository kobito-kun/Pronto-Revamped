import React, {useEffect, useState} from 'react'
import Product from './Product'
import { fetchRandomProducts } from '../../resolver/fetch';

function MainSection() {

  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    fetchRandomProducts().then(result => setRandomProducts(result["data"]));
    // eslint-disable-next-line
  }, [])

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="relative flex flex-col justify-center items-center select-none">
        <h2 style={{zIndex: '-1'}} className="absolute uppercase font-bold text-6xl text-gray-100">most recent</h2>
        <h4 className="text-4xl font-semibold leading-6">Newest Products</h4>
        <p className="text-center text-lg">have a look at our latest products.</p>
      </div>
      <div className="flex flex-wrap mt-10 justify-center items-center gap-8">
        {
          randomProducts.length > 0 
          ?
          randomProducts.map(each => <Product key={each._id} product={each} />)
          :
          "Hewwo"
        }
      </div>
      <div className="border w-full shadow-xl mt-10"></div>
    </div>
  )
}

export default MainSection
