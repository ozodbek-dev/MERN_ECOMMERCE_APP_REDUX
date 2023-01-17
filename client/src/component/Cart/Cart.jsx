import { RemoveShoppingCart } from '@mui/icons-material'
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart,removeItemFromCart } from '../../redux/actions/cartAction'
import { MetaData } from '../layout/MetaData'
import { CartContainer, EmptyCart } from './Cart.element'
import CartItem from './CartItem'


function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart)
  
  const incrQty = (id,qty,stock)=>{
    qty++;
    if(stock<qty){
      return
    }
    dispatch(addToCart(id,qty));
  }
  const decrQty = (id,qty)=>{
    qty--;
    if(qty!==0  && qty>0){
    dispatch(addToCart(id,qty));
      
    }
    return;
  
  }

  const deleteItem = (id)=>{
    dispatch(removeItemFromCart(id))
  }


  return (
    <Fragment>
      <MetaData title={"MY CART"}/>
      {cartItems.length ? (
        <CartContainer>
          <div className="cartHader">
            <p>Product</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div>
            {cartItems.map((item) => (
              <div key={item.product} className="cartContainer">
                <CartItem data={item} deleteItem={deleteItem}/>
                <div className="cartInput">
                  <button onClick={()=>decrQty(item.product,item.qty)}>-</button>
                  <input readOnly type="number" value={item.qty} />
                  <button onClick={()=>incrQty(item.product,item.qty,item.stock)}>+</button>
                </div>
                <p className='cartSubtotal'>{`$${item.price * item.qty}`}</p>
              </div>
            ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>${cartItems.reduce((sum,i)=> sum+i.qty*i.price, 0)}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button>Chek Out</button>
              </div>
            </div>
          </div>
        </CartContainer>
      ) : (
       <EmptyCart>
        <RemoveShoppingCart/>
          <p>Not Product In your Cart</p>
          <Link to="/products">Continue Shopping</Link>
       </EmptyCart>
      )}
    </Fragment>
  )
}

export default Cart
