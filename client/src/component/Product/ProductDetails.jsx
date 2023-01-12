import { Fragment, useEffect } from 'react'
import { MetaData } from '../layout/MetaData'
import { ProductDetailsContainer } from './ProductDetails.element'
import { getProductDetails } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { useParams } from 'react-router-dom'
import Loader from '../layout/loader/Loader'

const ProductDetails = () => {
  const alert = useAlert()
  const params = useParams()
  const dispatch = useDispatch()
  const {loading, error,product} = useSelector(state=>state.productDetails)

  useEffect(()=>{

    if(error){
      return alert.error(error)
    }
    dispatch(getProductDetails(params.id));

  },[dispatch,error])

  return (
    <Fragment>
      {
        !loading ?  <Fragment>
        <MetaData title={product.name}/>
        <ProductDetailsContainer>
          <p>rProduct details</p>
        </ProductDetailsContainer>
      </Fragment> : <Loader/>
      }
    </Fragment>
   
  )
}

export default ProductDetails
