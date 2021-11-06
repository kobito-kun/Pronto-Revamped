import React, {useState, useEffect} from 'react';
import { fetchProduct } from '../../resolver/fetch';

function ProductComponent({id}) {

  const [product, setProduct] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {

    setLoggedIn(localStorage.getItem("loggedIn"));
    fetchProduct(id).then(result => {
      setProduct(result);
    }).catch(err => {
      console.log(err)
    })

    // eslint-disable-next-line
  }, [])

  return (
    <div className={`${loggedIn ? "mt-24" : ""}`}>
      {JSON.stringify(product)}
    </div>
  )
}

export default ProductComponent
