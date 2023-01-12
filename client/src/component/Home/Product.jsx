import React from 'react'
import { ProductContainer } from './Home.element'
import ReactStarts from 'react-rating-stars-component'

const starWidth = (windowWidth) => {
  if (windowWidth < 500) {
    return 30
  } else if (windowWidth < 700) {
    return 15
  } else if (windowWidth < 1000) {
    return 20
  } else return 25
}


function Product({ product }) {
  const options = {
    edit: false,
    color: 'rgba(20,20,20, .1)',
    activeColor: 'tomato',
    size:  starWidth(window.innerWidth),
    value: product.rating,
    isHalf: true,
  }
  
  return (
    <ProductContainer to={`/product/${product._id}`}>
      <img src={product.images[0].img_url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStarts {...options} />
        <span>({product.reviews.length} reviews)</span>
      </div>
      <span className="price"> ${product.price}</span>
    </ProductContainer>
  )
}

export default Product
