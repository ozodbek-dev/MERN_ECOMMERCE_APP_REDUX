import { Delete } from '@mui/icons-material'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { CartItemContainer } from './Cart.element'

// import { Container } from './styles';

function CartItem({ data,deleteItem }) {
  return (
    <Fragment>
      <CartItemContainer >
        <Link to={`/product/${data.product}`}>
          <img src={data.image} alt={data.name} />
        </Link>
        <div>
          <Link to={`/product/${data.product}`}>{data.name}</Link>
          <span>{`Price: $${data.price}`}</span>
          <p onClick={()=>deleteItem(data.product)}> <Delete/> Remove</p>
        </div>
      </CartItemContainer>
    </Fragment>
  )
}

export default CartItem


//10:36 