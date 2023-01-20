import { Typography } from '@mui/material'
import React, { Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MetaData } from '../layout/MetaData'
import { PaymentContainer } from './Cart.element'
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
  PaymentElement,
  LinkAuthenticationElement,
  CardElement,
} from '@stripe/react-stripe-js'
import { CreditCard, Event, VpnKey } from '@mui/icons-material'
import axios from 'axios'

import CheckOutStpes from './CheckOutSteps'
import { useAlert } from 'react-alert'
import { clearErrors, createOrder } from '../../redux/actions/orderAction'

function Payment() {
  const navigate = useNavigate()
  const stripe = useStripe()
  const alert = useAlert()
  const elements = useElements()
  const dispatch = useDispatch()
  const { shippingInfo, cartItems } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.user)

  const { error } = useSelector((state) => state.newOrder)
  // const {error} = useSelector(state =>state.newOrder)
  const payBtn = useRef(null)

  const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'))

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  }

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: shippingInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    payBtn.current.disbled = true

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        '/api/v1/payment/process',
        paymentData,
        config,
      )

      const client_secret = data.client_secret

      if (!stripe || !elements) return
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      })

      if (result.error) {
        payBtn.current.disbled = false
        alert.error(result.error.message)
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          alert.success("Success")
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          }
          dispatch(createOrder(order))
          localStorage.clear();
          sessionStorage.clear()
          navigate('/payment/success')
        } else {
          alert.error("There's some issue while processing payment!")
        }
      }
    } catch (err) {
      payBtn.current.disbled = false
      alert.error(err)
    }
  }

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
  }, [dispatch, error, alert])

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckOutStpes activeStep={2} />
      <PaymentContainer>
        <form className='payForm' form onSubmit={submitHandler} >
            <CardElement />
            <button className='payBtn' ref={payBtn}  disabled={!stripe}>Confirm order</button>
        </form>

      </PaymentContainer>
    </Fragment>
  )
}

export default Payment
