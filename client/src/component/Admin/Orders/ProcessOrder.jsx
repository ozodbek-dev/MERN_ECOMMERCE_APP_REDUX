import { AccountTree, CheckCircle } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { useState } from 'react'
import { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'

import { useDispatch, useSelector } from 'react-redux'
import {  Link, useParams } from 'react-router-dom'
import {
  clearErrors,
  getOrderDetails,
  updateOrderAdmin,
} from '../../../redux/actions/orderAction'
import { UPDATE_ORDER_RESET } from '../../../redux/constants/orederConstants'
import { ConfirmOrderContainer } from '../../Cart/Cart.element'
import Loader from '../../layout/loader/Loader'
import { MetaData } from '../../layout/MetaData'
import { DashboardContainer } from '../Dashboard.element'
import Sidebar from '../Sidebar/Sidebar'

function ProcessOrder() {
  const dispatch = useDispatch()
  const alert = useAlert()
  const params = useParams()

  const { loading, order, error } = useSelector((state) => state.orderDetails)

  const { isUpdated, error: updateError } = useSelector(
    (state) => state.orderAdmin,
  )

  const [status, setStatus] = useState('')



  const changeOrderProcessHandler = (e) => setStatus(e.target.value)
  const changeProcessSubmit = (e) => {
    e.preventDefault()
    const myForm = new FormData()

    myForm.set('orderStatus', status)

    dispatch(updateOrderAdmin(params.id, myForm))
  }

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (updateError) {
      alert.error(updateError)
      dispatch(clearErrors())
    }

    if (isUpdated) {
      alert.success('Order Status updates successfully! :)')
      dispatch(clearErrors())
      dispatch({ type: UPDATE_ORDER_RESET })
    }

    console.log(params.id)
    dispatch(getOrderDetails(params.id))
  }, [dispatch, error, alert, params.id, updateError, isUpdated])

  return (
    <Fragment>
      <MetaData title="Process Order" />
      {loading ? (
        <Loader />
      ) : (
        <DashboardContainer>
          <Sidebar />
          <div className="container">
            <ConfirmOrderContainer>
              <div>
                <div className="area">
                  <Typography>Shipping Info</Typography>
                  <div className="box">
                    <div>
                      <p>Name:</p>
                      <span>{order?.user && order.user.name}</span>
                    </div>
                    <div>
                      <p>Phone:</p>
                      <span>
                        {order.shippingInfo && order.shippingInfo.phoneNo}{' '}
                      </span>
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
                          order.paymentInfo &&
                          order.paymentInfo.status === 'succeeded'
                            ? 'greenColor'
                            : 'redColor'
                        }
                      >
                        {order.paymentInfo &&
                        order.paymentInfo.status === 'succeeded'
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
                        style={{ display: 'flex', alignItems: 'center' }}
                        className={
                          order.orderStatus && order.orderStatus === 'Delivered'
                            ? 'greenColor'
                            : 'redColor'
                        }
                      >
                        {order.orderStatus} &nbsp;
                        {order.orderStatus === 'Delivered' && <CheckCircle />}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <Typography>Your Cart Items: </Typography>
                  <div className="confirmCartItemsContainer">
                    {order.orderItems &&
                      order.orderItems.map((item) => (
                        <Link
                          to={`/product/${item.product}`}
                          key={item.product}
                        >
                          <img src={item.image} alt={item.name} />
                          <p>{item.name}</p>
                          <span>
                            {item.qty} X ${item.price} ={' '}
                            <b>${item.price * item.qty}</b>
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
              {order.orderStatus !== 'Delivered' && (
                <form
                  className="createProductForm"
                  encType="multipart/form-data"
                  onSubmit={changeProcessSubmit}
                >
                  <h1>Process Order</h1>
                  <div>
                    <select
                      name="category"
                      onChange={changeOrderProcessHandler}
                    >
                      <option value="">Choose Category</option>
                      {order.orderStatus === 'Processing' && (
                        <option value="Shipped">Shipped</option>
                      )}

                      {order.orderStatus === 'Shipped' && (
                        <option value="Delivered">Delivered </option>
                      )}
                    </select>
                    <AccountTree />
                  </div>
                  <Button
                    disabled={status ? false : true || loading ? true : false}
                    className="submitBtn"
                    color="success"
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Process
                  </Button>
                </form>
              )}
            </ConfirmOrderContainer>
          </div>
        </DashboardContainer>
      )}
    </Fragment>
  )
}

export default ProcessOrder
