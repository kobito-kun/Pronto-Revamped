import React, {useState, useEffect} from 'react'
import Square from '../../assets/square.png';
import StackGrid from "react-stack-grid";
import { fetchAllProducts } from '../../resolver/fetch';

function Products() {

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts().then(result => setAllProducts(result["data"]));
  }, [])

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
        {
          allProducts.length > 0
          ?
          allProducts.map(item => 
            <div key={item._id} className="border m-1 bg-white flex justify-center items-center shadow-lg" style={{height: `${Math.floor(Math.random() * (20 - 5) + 5)}rem`}}>
              <h3 className="truncate font-semibold">{item.title}</h3>
            </div>
          )
          :
          "Nothing"
        }
      </StackGrid>
    </div>
  )
}

export default Products