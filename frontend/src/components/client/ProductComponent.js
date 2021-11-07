import React, {useState, useEffect, useRef} from 'react';
import { fetchProduct } from '../../resolver/fetch';

function ProductComponent({clickedProduct}) {

  const [product, setProduct] = useState();
  const [total, setTotal] = useState(0);
  const [clicked, setClicked] = useState(false);

  const quantityElement = useRef(null);

  useEffect(() => {

    fetchProduct(clickedProduct).then(result => {
      console.log(result)
      setProduct(result["data"]);
      setTotal(result["data"]["price"]);
    }).catch(err => {
      console.log(err)
    })
    // eslint-disable-next-line
  }, [])

  const onQuantityChange = () => {
    setTotal(product["price"] * quantityElement.current.value);
  }

  const createOrder = () => {
    setClicked(true);
    const object = {
      product_id: product["_id"],
      quantity: quantityElement.current.value,
    };
    console.log(object)
  }

  return (
    <div className="fixed min-h-screen w-screen bg-black z-20 bg-opacity-50 flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="text-white absolute top-2 right-5 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
      <div className="bg-white lg:w-96 p-2 rounded shadow-lg my-20 h-full">
        {product
          ?
          <div className="flex flex-col gap-2">
            <img src={product["image"]} alt="Product" className="w-full" />
            <h3 className="text-xl text-center font-semibold">{product["title"]}</h3>
            <p className="">{product["description"]}</p>
            <input min="1" defaultValue="1" onChange={onQuantityChange} ref={quantityElement} type="number" className="outline-none border py-2 px-4" placeholder="Quantity" />
            <button onClick={() => createOrder()} className="bg-black px-4 py-2 text-white flex justify-center items-center">
              {clicked
                ?
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                :
                `Purchase $${total}`
              }
            </button>
          </div>
          :
          ""
        }
      </div>
    </div>
  )
}

export default ProductComponent