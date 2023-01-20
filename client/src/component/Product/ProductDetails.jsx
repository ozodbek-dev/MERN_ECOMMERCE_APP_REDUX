import { Fragment, useEffect, useState } from 'react'
import { MetaData } from '../layout/MetaData'
import { ProductDetailsContainer, Reviews, StyledDialogContent } from './ProductDetails.element'
import { clearErrors, getProductDetails, newReview } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { useParams } from 'react-router-dom'
import Loader from '../layout/loader/Loader'
import Carousel from 'react-material-ui-carousel'
import ReviewCard from './ReviewCard'
import { addToCart } from '../../redux/actions/cartAction'

import {Dialog,DialogActions,DialogContent,DialogTitle,Button, Rating} from '@mui/material'
import { NEW_REVIEW_RESET } from '../../redux/constants/productConstants'


const ProductDetails = () => {
  const alert = useAlert()
  const params = useParams()
  const dispatch = useDispatch()
  const { loading, error, product } = useSelector(
    (state) => state.productDetails,
  )
  const { success, error:reviewError } = useSelector(
    (state) => state.newReview,
  )

  const [qty, setQty] = useState(1);

  const [openDialog, setOpenDialog] = useState(false)
  const [rating, setRating] = useState(0);
  const [comment,setComment] = useState('')

  const incrQty = ()=>{
    if(product.stock > qty){
      setQty(prev=>++prev)
    }
    else{
      alert.error("The Product Stock do not enought")
    }
    return;
  }
  const decrQty = ()=>{
    if(qty!==1 && qty>0){
      setQty(prev=>--prev)
    }
    return;
  }

  const addToCartHandler = ()=>{
    dispatch(addToCart(params.id,qty))
    alert.success("Product Add To Cart")
  }



  const submitReviewtoggle = ()=>{
    setOpenDialog(prev=>!prev)
  }


  const reviewSubmitHandler = ()=>{
    const myform = new FormData();

    myform.set("rating",rating);
    myform.set("comment",comment)
    myform.set("productId",params.id)
    dispatch(newReview(myform))
    submitReviewtoggle();
  }

  useEffect(() => {
    if (error || reviewError) {
       alert.error(error ||  reviewError)
       dispatch(clearErrors() )
    }

    if(success){
      alert.success("Review Submited Successfully!")
      dispatch({type:NEW_REVIEW_RESET})
    }
    dispatch(getProductDetails(params.id))
  }, [dispatch, error,alert,params.id, reviewError,success])

  const options = {
    value: product.rating,
    size:"large",
    readOnly:true,
    precision:0.5
  }



  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={product.name} />
          <ProductDetailsContainer>
            <div>
              <Carousel>
                {product.images &&
                  product.images.map((img, i) => (
                    <img
                      className="CarouselImage"
                      key={img.img_url}
                      src={img.img_url}
                      alt={`${product.name}-${i + 1}-image`}
                    />
                  ))}
              </Carousel>
            </div>
            <div>
              <div className="detailsBlock__1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock__2">
                <Rating {...options} />
                <span>({product.numOfReviews} Reviews)</span>
              </div>

              <div className="detailsBlock__3">
                <h1>${product.price}</h1>
                <div className="detailsBlock__3_1">
                  <div className="detailsBlock__3_1-1">
                    <button onClick={decrQty}>-</button>
                    <input readOnly type="number" value={qty} />
                    <button onClick={incrQty}>+</button>
                  </div>{' '}
                  <button onClick={addToCartHandler}>Add To Cart</button>
                </div>

                <p>
                  Status:{' '}
                        
                  <b className={product.stock < 1 ? 'redColor' : 'greenColor'}>
                    {product.stock < 1 ? 'OutOfStock' : 'InStock'}
                  </b>
                </p>
              </div>

              <div className="detailsBlock__4">
                Description: <p>{product.desc}</p>
              </div>

              <button onClick={submitReviewtoggle} className="submitReview">Submit Review</button>
            </div>
        
          </ProductDetailsContainer>
          <Reviews>
              <h3 className="reviewsHeading">REVIEWS</h3>

              <Dialog aria-labelledby='simple-dialog-title' open={openDialog} onClose={submitReviewtoggle}>
                    <DialogTitle>Submit Review</DialogTitle>
                    <StyledDialogContent>
                      <Rating 
                        onChange={e=>setRating(e.target.value)}
                        value={rating}
                        size="large"
                        sx={{margin:".5vmax 0"}}
                      />
                      <textarea
                        className='submitDialogTextArea'
                        cols="30"
                        rows="5"
                        value={comment}
                        onChange={e=>setComment(e.target.value)}
                      ></textarea>
                      <DialogActions>
                        <Button color='error' variant='contained'  onClick={submitReviewtoggle}>Cancel</Button>
                        <Button onClick={reviewSubmitHandler} variant='contained' color="success">Submit</Button>
                      </DialogActions>
                    </StyledDialogContent>
              </Dialog>

            {product.reviews && product.reviews[0] ? (
                <div className="reviews">
                  {product.reviews.map((review) => (
                    <ReviewCard review={review} key={review._id} />
                  ))}
                </div>
              ) : (
                <p className='noReviews'>No Reviews Yet</p>
              )}

            </Reviews>  
        </Fragment>
      )}
    </Fragment>
  )
}

export default ProductDetails



// 9:48 product details 