import { Fragment, useEffect } from 'react'
import { CgMouse } from 'react-icons/cg'
import { MetaData } from '../layout/MetaData'
import { HomeContainer } from './Home.element'
import Product from './Product'
import { getProduct } from '../../redux/actions/productActions'
import { useDispatch,useSelector } from 'react-redux'
import Loader from '../layout/loader/Loader'
import { useAlert } from 'react-alert'
const product = {
  name: 'Blue TShirt',
  images: [
    {
      url:
        'https://w7.pngwing.com/pngs/557/299/png-transparent-t-shirt-polo-shirt-clothing-sleeve-t-shirt-blue-tshirt-blue-active-shirt-thumbnail.png',
    },
    {
      url:
        'https://w7.pngwing.com/pngs/618/449/png-transparent-blue-polo-shirt-collage-t-shirt-polo-shirt-clothing-polo-shirt-tshirt-blue-fashion-thumbnail.png',
    },
  ],
  price: '100$',
  _id: 'abhishek',
}

const Home = () => {
  const alert = useAlert();
  const dispatch= useDispatch();
  const {loading,error,products,productsCount} = useSelector(state=>state.products)

  useEffect(()=>{
    if(error){
      return alert.error(error)
    }

    dispatch(getProduct())

  },[dispatch,error])
  return (
    <Fragment>
      {loading ? <Loader/> : 
          <Fragment>
          <MetaData title="Ecommerce Landing Page"/>
          <HomeContainer>
            <div className="banner">
              <p>Welcome to Ecommernce</p>
              <h1>FIND AMAZING PRODUCTS BELOW</h1>
              <a href="#container">
                <button>
                  Scroll
                  <CgMouse />
                </button>
              </a>
            </div>
            <div className="homeHeading">Featured Products</div>
            <div id="container">
    
              {
                products && products.map(product=>{
                  return <Product product={product} key={product._id}/>
    
                })
              }
              
    
            </div>
          </HomeContainer>
        </Fragment>}
    </Fragment>

  )
}

export default Home

//6:07 product details