import { useEffect, Fragment, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearErrors, getProduct } from '../../redux/actions/productActions'
import Product from '../Home/Product'
import Loader from '../layout/loader/Loader'
import {
  FilterBox,
  PaginationBox,
  ProductsContainer,
} from './ProductDetails.element'
import Pagination from 'react-js-pagination'
import { Slider, Typography } from '@mui/material'
import { MetaData } from '../layout/MetaData'

const categories = [
  'all',
  'laptop',
  'menswear',
  'womenswear',
  'footwear',
  'smartphones',
]

function valuetext(value) {
  return `${value}$`
}

const Products = () => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const params = useParams()
  const keyword = params.keyword

  const [currentPage, setCurrentPage] = useState(1)
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState([0, 2500])
  const [rating, setRating] = useState(0)
  const {
    error,
    loading,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products)

  const setCurrentPageNo = (e) => {
    setCurrentPage(e)
  }

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice)
  }

  useEffect(() => {
    if (error) {
      alert.error(error)    
      dispatch(clearErrors())
    }
    dispatch(getProduct(keyword, currentPage, price, category,rating))
  }, [error, dispatch, keyword, currentPage, price, category,rating,alert,error])

  console.log(filteredProductsCount && filteredProductsCount)
  return (
    <Fragment>
      <MetaData title = " PRODUCTS -- ECOMMERCE "/>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <ProductsContainer>
            <h1 className="productsHeading">Products</h1>
            <div className="products">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </ProductsContainer>

          <FilterBox>
          <Typography variant='h3'>
               Filter
         </Typography>
            <div className="slider f">
              <Typography>
                Price : from {`${price[0]} to ${price[1]}`}
              </Typography>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={2500}
              />
            </div>

            <div className="category f">
              <Typography mb={'1rem'}>cagtegory </Typography>
              <ul className="category__list">
                {categories.map((category) => (
                  <li
                    className="category__list_link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <fieldset className='f'>
              <Typography mb={'1rem'} component="legend">
                Ragings Above from {rating}{' '}
              </Typography>
              <Slider
                value={rating}
                onChange={(e,newRating)=>{
                  setRating(newRating)
                }}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={5}
              />
            </fieldset>
          </FilterBox>
          {resultPerPage < filteredProductsCount && (
            <PaginationBox>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText=">"
                prevPageText={'<'}
                firstPageText="<<"
                lastPageText={'>> '}
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </PaginationBox>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

export default Products