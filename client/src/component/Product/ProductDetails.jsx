import { Fragment, useEffect, useState } from 'react'
import { MetaData } from '../layout/MetaData'
import { ProductDetailsContainer, Reviews } from './ProductDetails.element'
import { clearErrors, getProductDetails } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { useParams } from 'react-router-dom'
import Loader from '../layout/loader/Loader'
import Carousel from 'react-material-ui-carousel'
import ReactStars from 'react-rating-stars-component'
import ReviewCard from './ReviewCard'
import { addToCart } from '../../redux/actions/cartAction'

const starWidth = (windowWidth) => {
  if (windowWidth < 500) {
    return 30
  } else if (windowWidth < 700) {
    return 15
  } else if (windowWidth < 1000) {
    return 20
  } else return 25
}

const ProductDetails = () => {
  const alert = useAlert()
  const params = useParams()
  const dispatch = useDispatch()
  const { loading, error, product } = useSelector(
    (state) => state.productDetails,
  )

  const [qty, setQty] = useState(1);

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

  useEffect(() => {
    if (error) {
       alert.error(error)
       dispatch(clearErrors())
    }
    dispatch(getProductDetails(params.id))
  }, [dispatch, error,alert,params.id])

  const options = {
    edit: false,
    color: 'rgba(20,20,20, .1)',
    activeColor: 'tomato',
    size: starWidth(window.innerWidth),
    value: product.rating,
    isHalf: true,
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
                <ReactStars {...options} />
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

              <button className="submitReview">Submit Review</button>
            </div>
        
          </ProductDetailsContainer>
          <Reviews>
              <h3 className="reviewsHeading">REVIEWS</h3>

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