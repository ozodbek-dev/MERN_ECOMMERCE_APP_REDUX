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
import {
  getAllUsersAdmin,
  clearErrors,
  deleteUserAdmin,
} from '../../../redux/actions/userAction'
import { DELETE_USER_RESET } from '../../../redux/constants/userConstants'
import Loader from '../../layout/loader/Loader'

function Users() {
  const dispatch = useDispatch()
  const alert = useAlert()
  const navigate = useNavigate()

  const { error, users } = useSelector((state) => state.allUsersAdmin)

  const {loading, error: delError, isDeleted } = useSelector((state) => state.profile)

  const deleteUserHandler = (id) => {
    dispatch(deleteUserAdmin(id))
  }

  const cols = [
    { field: 'id', headerName: 'User ID', minWidth: 200, flex: 1 },
    { field: 'name', headerName: 'Name', minWidth: 200, flex: 1 },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 200,
      flex: 1,
    },
    {
      field: 'role',
      headerName: 'Role',
      minWidth: 100,
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
            <Link to={`/admin/user/${params.getValue(params.id, 'id')}`}>
              <Edit />
            </Link>
            <Button
              color="error"
              onClick={() =>
                deleteUserHandler(params.getValue(params.id, 'id'))
              }
            >
              <Delete />
            </Button>
          </Fragment>
        )
      },
    },
  ]

  const rows = []

  users &&
    users.forEach((user) => {
      rows.push({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
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
    if (isDeleted) {
      alert.success('User Deleted Successfully!')
      dispatch({ type: DELETE_USER_RESET })
      navigate('/admin/users')
    }

    dispatch(getAllUsersAdmin())
  }, [error, dispatch, alert, isDeleted, delError])
  return (
    <Fragment>
      <MetaData title="Admin -- Users" />
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </Fragment>
  )
}

export default Users
