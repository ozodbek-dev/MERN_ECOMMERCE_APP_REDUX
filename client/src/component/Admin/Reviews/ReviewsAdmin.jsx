import React, { Fragment, useEffect, useState } from 'react'
import { MetaData } from '../../layout/MetaData'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { Delete, Star } from '@mui/icons-material'
import Sidebar from '../Sidebar/Sidebar'
import { DataGrid } from '@mui/x-data-grid'
import {
  clearErrors,
  getAllreviewsAdmin,
  deleteReviewAdmin,
} from '../../../redux/actions/productActions'
import {
  DEL_REVIEW_RESET_ADMIN,
} from '../../../redux/constants/productConstants'
import { ReviewListContainer, ReviewsFormContainer, ReviewsListContainer } from './Reviews.element'
import Loader from '../../layout/loader/Loader'

function ProductReviews() {
  const dispatch = useDispatch()
  const alert = useAlert()
  const navigate = useNavigate()
  const { error, reviews, loading } = useSelector(
    (state) => state.productReviewsAdmin,
  )

  const { error: delError, isDeleted } = useSelector(
    (state) => state.reviewAdmin,
  )

  const [productId, setProductId] = useState('')

  const productReviewsSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllreviewsAdmin(productId))
  }


  const deleteReviewHandler = (id) => {
    dispatch(deleteReviewAdmin(id,productId))
  }

  const cols = [
    { field: 'id', headerName: 'Review ID', minWidth: 200, flex: 1 },
    { field: 'user', headerName: 'User', minWidth: 200, flex: 1 },
    { field: 'comment', headerName: 'Comment', minWidth: 300, flex: 1 },
    {
      field: 'rating',
      headerName: 'Rating',
      minWidth: 100,
      flex: 0.3,
      type: 'number',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 150,
      flex: 0.3,
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Button
              color="error"
              onClick={() =>
                deleteReviewHandler(params.getValue(params.id, 'id'))
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

  reviews &&
    reviews.forEach((rev) => {
      rows.push({
        id: rev._id,
        rating: rev.rating,
        comment: rev.comment,
        user: rev.name,
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
      alert.success('Review Deleted Successfully!')
      navigate('/admin/reviews')
      dispatch(getAllreviewsAdmin(productId))
      dispatch({ type: DEL_REVIEW_RESET_ADMIN })
    }
  }, [error, dispatch, alert, isDeleted, delError, navigate,productId])
  return (
    <Fragment>
      <MetaData title="Admin -- Reviews" />
      <ReviewsListContainer>
        <Sidebar />
        <div className="container">
          <Typography component={'h1'}>ALL Reviews</Typography>

          <ReviewsFormContainer>
            <div className="box">
              <div>
                <form
                  onSubmit={productReviewsSubmitHandler}
                  className="signUpForm"
                  encType="multipart/form-data"
                >
                  <div className="loginEmail">
                    <input
                      type="tex"
                      placeholder="Product Id"
                      required
                      value={productId}
                      onChange={(e) => setProductId(e.target.value)}
                    />
                    <Star />
                  </div>

                  <input
                    type="submit"
                    value="Search"
                    className="signUpBtn"
                    disabled={
                      loading ? true : false || productId === '' ? true : false
                    }
                  />
                </form>
              </div>
            </div>
          </ReviewsFormContainer>

          {
            loading ? <Loader/>:          <ReviewListContainer >
            {reviews && reviews.length > 0 ? (
         
                <DataGrid
                  rows={rows}
                  columns={cols}
                  disableSelectionOnClick
                  className="productListTable"
                  autoHeight
                />
            ) : (
              <h1>Reviews Not found</h1>
            )}
              </ReviewListContainer>
          }


        </div>
      </ReviewsListContainer>
    </Fragment>
  )
}

export default ProductReviews
