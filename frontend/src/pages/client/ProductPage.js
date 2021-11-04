import React from 'react'
import ProductComponent from '../../components/client/ProductComponent'
import Navbar from '../../components/Navbar'

function ProductPage({match}) {
  return (
    <div>
      <Navbar />
      <ProductComponent />
    </div>
  )
}

export default ProductPage
