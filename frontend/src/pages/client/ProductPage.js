import React, {useEffect, useState} from 'react'
import ProductComponent from '../../components/client/ProductComponent'
import Navbar from '../../components/Navbar'

function ProductPage({match}) {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {

    setLoggedIn(localStorage.getItem("loggedIn"));

  // eslint-disable-next-line
  }, [])

  return (
    <div>
      {loggedIn ? <Navbar /> : "" }
      <ProductComponent id={match.params.id} />
    </div>
  )
}

export default ProductPage
