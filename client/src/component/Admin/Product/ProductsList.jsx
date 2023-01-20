import React, { Fragment, useEffect } from 'react'
import { MetaData } from '../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {
  ProductListContainer,
  ProductsListContainer,
} from './ProducstsList.element'
import { Button, Typography } from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'
import Sidebar from '../Sidebar/Sidebar'
import { DataGrid } from '@mui/x-data-grid'
import {
  clearErrors,
  getAdminProduct,
} from '../../../redux/actions/productActions'

function ProductsList() {
  const dispatch = useDispatch()
  const { loading, error, products } = useSelector((state) => state.products)

  const cols = [
    { field: 'id', headerName: 'Product ID', minWidth: 200, flex: 1 },
    { field: 'name', headerName: 'Name', minWidth: 200, flex: 1 },
    {
      field: 'stock',
      headerName: 'Stock',
      minWidth: 150,
      flex: 0.3,
      type: 'number',
    },
    {
      field: 'price',
      headerName: 'Price',
      minWidth: 200,
      type: 'number',
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
            <Link to={`/admin/product/${params.getValue(params.id, 'id')}`}>
              <Edit />
            </Link>
            <Button color="error">
              <Delete />
            </Button>
          </Fragment>
        )
      },
    },
  ]

  const rows = []

  products &&
    products.forEach((prod) => {
      rows.push({
        id: prod._id,
        stock: prod.stock,
        price: prod.price,
        name: prod.name,
      })
    })

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getAdminProduct())
  }, [error, dispatch, alert])
  return (
    <Fragment>
      <MetaData title="Admin -- Products" />
      <ProductsListContainer>
        <Sidebar />
        <div className="container">
          <Typography component={'h1'}>ALL PRODUCTS</Typography>

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

export default ProductsList
