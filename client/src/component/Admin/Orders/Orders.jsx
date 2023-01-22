import React, { Fragment, useEffect } from 'react'
import { MetaData } from '../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
  ProductListContainer,
  ProductsListContainer,
} from '../Product/ProducstsList.element'
import { Button, Typography } from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'
import Sidebar from '../Sidebar/Sidebar'
import { DataGrid } from '@mui/x-data-grid'
import { deleteOrderAdmin, clearErrors,getAllOrdersAdmin } from '../../../redux/actions/orderAction'
import { DELETE_ORDER_RESET } from '../../../redux/constants/orederConstants'

function Orders() {
  const dispatch = useDispatch()
  const alert = useAlert();
  const navigate = useNavigate()
  const {  error, orders } = useSelector((state) => state.allOrders)
  
  const {  error:delError, isDeleted } = useSelector((state) => state.orderAdmin)
  const deleteOrderHandler = (id)=>{
    dispatch(deleteOrderAdmin(id))
  }

  const cols = [
{ field: 'id', headerName: 'Order ID', minWidth: 300, flex: 1 },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, 'status') === 'Delivered'
          ? 'greenColor'
          : 'redColor'
      },
    },
    {
      field: 'itemsQty',
      headerName: 'Items Qty',
      type: Number,
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      type: Number,
      minWidth: 270,
      flex: 0.5,
    },
    {
      field: 'actios',
      headerName: 'Actions',
      minWidth: 150,
      flex: 0.3,
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/order/${params.getValue(params.id, 'id')}`}>
              <Edit />
            </Link>
            <Button color="error" onClick={()=>deleteOrderHandler(params.getValue(params.id, "id"))}>
              <Delete />
            </Button>
          </Fragment>
        )
      },
    },
  ]

  const rows = []


  orders &&
    orders.forEach((order) => {
      rows.push({
        itemsQty: order.orderItems.length,
        id: order._id,
        status: order.orderStatus,
        amount: order.totalPrice,
      })
    })

  useEffect(() => {
   
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }

    if (delError) {
      alert.error(delError)
      dispatch(clearErrors())
    }

    if(isDeleted){
      alert.success("Order Deleted Successfully!")
      dispatch({type:DELETE_ORDER_RESET})
      navigate('/admin/orders')
    }

    dispatch(getAllOrdersAdmin())
  }, [error, dispatch, alert, isDeleted,delError])
  return (
    <Fragment>
      <MetaData title="Admin -- Orders" />
      <ProductsListContainer>
        <Sidebar />
        <div className="container">
          <Typography component={'h1'}>ALL Orders</Typography>

          <ProductListContainer>
            <DataGrid
              rows={rows}
              columns={cols}
              disableSelectionOnClick
              className="productListTable"
              autoHeight
            />
          </ProductListContainer>
        </div>
      </ProductsListContainer>
    </Fragment>
  )
}

export default Orders
