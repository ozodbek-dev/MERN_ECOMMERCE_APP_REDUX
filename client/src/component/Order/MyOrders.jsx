import { Launch, LineAxis } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearErrors, myAllOrders } from '../../redux/actions/orderAction'
import Loader from '../layout/loader/Loader'
import { MetaData } from '../layout/MetaData'
import { MyOrdersContainer } from './MyOrders.element'

function MyOrders() {
  const dispatch = useDispatch()
  const alert = useAlert()
  const { loading, error, orders } = useSelector((state) => state.myOrders)
  const { user } = useSelector((state) => state.user)

  const rows = []
  const columns = [
    { field: 'id', headerName: 'Order ID', minWidth:300 , flex:1},
    { field: 'status', headerName: 'Status', minWidth:150 , flex:.5, cellClassName:(params)=>{
      return params.getValue(params.id, "status") === "Delivered" ? "greenColor":"redColor"
    }},
    { field: 'itemsQty', headerName: 'Items Qty', type:Number, minWidth:150, flex:.3 },
    { field: 'amount', headerName: 'Amount', type:Number, minWidth:270, flex:.5 },
    { field: 'Actions', headerName: 'Actions',  minWidth:150, type:Number,flex:.3, sortable:false, 
    renderCell:(params)=>{
      return(
        <Link to={`/order/${params.getValue(params.id,"id")}`}>
          <Launch/>
        </Link>
      )
    }
  },

  ]

  orders && orders.forEach((order,i) => {
    rows.push({
      itemsQty:order.orderItems.length,
      id:order._id,
      status:order.orderStatus,
      amount:order.totalPrice
    })
  });

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(myAllOrders())
  }, [error, alert, dispatch])

  return (
    <Fragment>
      <MetaData title={`${user?.name} - Orders`} />
      {loading ? (
        <Loader />
      ) : (
        <MyOrdersContainer>
          <DataGrid
            rows={rows}
            columns={columns}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />
          <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
        </MyOrdersContainer>
      )}
    </Fragment>
  )
}

export default MyOrders
