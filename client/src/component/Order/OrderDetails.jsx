import { Typography } from '@mui/material'
import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { clearErrors, getOrderDetails } from '../../redux/actions/orderAction'
import Loader from '../layout/loader/Loader'
import { MetaData } from '../layout/MetaData'
import { OrderDetailsContainer } from './MyOrders.element'

function OrderDetails() {
  const dispatch = useDispatch()
  const alert = useAlert()
  const params = useParams()
  const { loading, order, error } = useSelector((state) => state.orderDetails)

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }

    console.log(params.id)
    dispatch(getOrderDetails(params.id))
  }, [dispatch, error, alert, params.id])

  return (
    <Fragment>
      <MetaData title={'Order Details'} />
      <OrderDetailsContainer>
        <div className="container">
          <Typography component={'h1'}>Order: #{order && order._id}</Typography>
          <Typography>Shipping Info</Typography>
          <div className="box">
            <div>
              <p>Name:</p>
              <span>{order.user && order.user.name}</span>
            </div>
            <div>
              <p>Phone:</p>
              <span>{order.shippingInfo && order.shippingInfo.phoneNo} </span>
            </div>
            <div>
              <p>Address:</p>
              <span>
                {order.shippingInfo &&
                  `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode},  ${order.shippingInfo.phoneNo},`}
              </span>
            </div>
          </div>

          <Typography>Payment</Typography>
          <div className="box">
            <div>
              <p
                className={
                  order.paymentInfo && order.paymentInfo.status === 'succeeded'
                    ? 'greenColor'
                    : 'redColor'
                }
              >
                {order.paymentInfo && order.paymentInfo.status === 'succeeded'
                  ? 'PAID'
                  : 'NOT PAID'}
              </p>
            </div>
            <div>
              <p>Amount:</p>
              <span>{order.totalPrice && order.totalprice} </span>
            </div>
          </div>

          <Typography>Order Status</Typography>
          <div className="box">
            <div>
              <p
                className={
                  order.orderStatus && order.orderStatus === 'Delivered'
                    ? 'greenColor'
                    : 'redColor'
                }
              >
                {order.orderStatus && order.orderStatus}
              </p>
            </div>
            <div>
              <p>Amount:</p>
              <span>${order.totalPrice && order.totalPrice} </span>
            </div>
          </div>
        </div>
        <div className="orderCartItems">
          <Typography>Order Items:</Typography>

          <div className="orderCartItemsContainer">
          {
            order.orderItems && order.orderItems.map((order)=>(
              <Link to={`/product/${order.product}`} key={order.porduct}>

                <img src={order.image} alt={order.name} />
                
              <p>
                {order.name}
              </p>
              {" "}

              <span>
              {order.qty} x ${order.price} = {" "} 
              <b>${order.price * order.qty}</b>
              </span>
              </Link>
            ))
          }
          </div>

        
        </div>
      </OrderDetailsContainer>
    </Fragment>
  )
}

export default OrderDetails
