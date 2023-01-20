import React from 'react'
import { ProductContainer } from './Home.element'
import { Rating } from '@mui/material'



function Product({ product }) {
  const options = {
    value: product.rating,
    size:"large",
    readOnly:true,
    precision:0.5
  }
  
  return (
    <ProductContainer to={`/product/${product._id}`}>
      <img src={product.images[0].img_url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} className="star"/>
        <span>({product.reviews.length} reviews)</span>
      </div>
      <span className="price"> ${product.price}</span>
    </ProductContainer>
  )
}

export default Product
