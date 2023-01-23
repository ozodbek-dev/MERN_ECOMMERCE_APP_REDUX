import { Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { MetaData } from '../layout/MetaData'
import { ConfirmOrderContainer } from './Cart.element'
import CheckOutStpes from './CheckOutSteps'


function ConfirmOrder() {
  const navigate = useNavigate()
  const { cartItems, shippingInfo } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.user)



  const subtotal = cartItems.reduce((sum,i)=>sum+i.price*i.qty, 0);

const shippingCharges = subtotal > 1000 ? 0 : 200;

const tax  = subtotal *0.18;

const totalPrice = subtotal + tax + shippingCharges;

const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`

const proceedToPayment = ()=>{
  const data ={
    subtotal,tax,
    shippingCharges,
    totalPrice
  }
  sessionStorage.setItem("orderInfo",JSON.stringify(data))
  navigate('/process/payment')
}

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckOutStpes activeStep={1} />
      <ConfirmOrderContainer>
        <div>
          <div className="area">
            <Typography>Shipping Info</Typography>
            <div className="box">
              <div>
                <p>Name: </p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone: </p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address: </p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="container">
            <Typography>Your Cart Items: </Typography>
            <div className="confirmCartItemsContainer">
               {
                cartItems && cartItems.map(item=>(
                  <Link  to={`/product/${item.product}`} key={item.product}>
                    <img src={item.image} alt={item.name} />
                    <p>
                      {item.name}
                    </p>
                    <span>
                      {item.qty} X ${item.price} = {" "}
                      <b>${item.price * item.qty}</b>
                    </span>
                  </Link>
                ))
               }
            </div>
          </div>
        </div>
        <div className="orderSummary">
          <Typography component="p">Order Summary</Typography>
          <div>
            <div>
              <p>Subtotal:</p>
              <span>$ {subtotal}</span>
            </div>

            <div>
              <p>Shipping Charges: </p>
              <span>${shippingCharges}</span>
            </div>

            <div>
              <p>GST: </p>
              <span>${tax}</span>
            </div>

            <div className='orderSummaryTotal'>
               <p>
                <b>Total:</b>
                
               </p>
               <span>${totalPrice}</span>
            </div>


          </div>
            <button  onClick={proceedToPayment}>Proceed to Payment</button>
        </div>
      </ConfirmOrderContainer>
    </Fragment>
  )
}

export default ConfirmOrder