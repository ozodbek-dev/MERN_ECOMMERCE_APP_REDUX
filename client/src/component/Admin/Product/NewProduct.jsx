import { Button, Typography } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { DashboardContainer } from '../Dashboard.element'
import Sidebar from '../Sidebar/Sidebar'
import { MetaData } from '../../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { CreateProductContainer } from './ProducstsList.element'
import {
  AccountTree,
  AttachMoney,
  Description,
  Spellcheck,
  Storage,
} from '@mui/icons-material'
import { useAlert } from 'react-alert'
import { clearErrors, createProductAdmin } from '../../../redux/actions/productActions'
import { NEW_PROD_RESET_ADMIN } from '../../../redux/constants/productConstants'
import Loader from '../../layout/loader/Loader'
const categories = [
  'all',
  'laptop',
  'menswear',
  'womenswear',
  'footwear',
  'smartphones',
]

const initialstate = {
  name: '',
  price: 0,
  desc: '',
  category: '',
  stock: 1,
}

export const NewProduct = () => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const { loading, error, success } = useSelector((state) => state.newProductAdmin)

  const [prodData, setProdData] = useState(initialstate)
  const [images, setImages] = useState([])
  const [imagesPreview, setImagesPreview] = useState([])


  const createProductSubmitHandler = (e) => {
    e.preventDefault()

    const myForm = new FormData()

    myForm.set('name', prodData.name)
    myForm.set('price', prodData.price)
    myForm.set('desc', prodData.desc)
    myForm.set('category', prodData.category)
    myForm.set('stock', prodData.stock)

    images.forEach((img) => {
      myForm.append('images', img)
    })


    dispatch(createProductAdmin(myForm))
  }

  const changeProdDataHandler = (e) => {
    setProdData({ ...prodData, [e.target.name]: e.target.value })
  }

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files)

    setImages([])
    setImagesPreview([])

    files.forEach((file) => {
      const reader = new FileReader()

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((prev) => [...prev, reader.result])
          setImages((prev) => [...prev, reader.result])
        }
      }
      reader.readAsDataURL(file)
    })
  }


  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if (success) {
      alert.success('Product Created SuccessFullly')
      navigate('/admin/dashboard')
      dispatch({ type: NEW_PROD_RESET_ADMIN })
    }
  }, [error, dispatch, alert, navigate, success])


  return (
    <Fragment>
      <MetaData title="Create New Product" />
      {loading && <Loader/>}
      <CreateProductContainer>
        <Sidebar />
        <div className="container">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Product</h1>

            <div>
              <input
                type="text"
                placeholder="Product Name"
                required
                name="name"
                value={prodData.name}
                onChange={changeProdDataHandler}
              />
              <Spellcheck />
            </div>

            <div>
              <input
                type="number"
                placeholder="Price"
                required
                name="price"
                value={prodData.price}
                onChange={changeProdDataHandler}
              />
              <AttachMoney />
            </div>

            <div>
              <textarea
                placeholder="Product Description"
                required
                name="desc"
                value={prodData.desc}
                onChange={changeProdDataHandler}
                cols="30"
                rows={1}
              />
              <Description />
            </div>

            <div>
              <select name="category" onChange={changeProdDataHandler}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
              <AccountTree />
            </div>

            <div>
              <input
                type="number"
                placeholder="Stock"
                required
                name="stock"
                value={prodData.stock}
                onChange={changeProdDataHandler}
              />
              <Storage />
            </div>

            <div id="createProdFormFile">
              <input
                type="file"
                required
                name="avatar"
                accept="image/png, image/gif, image/jpg, image/jpeg"
                onChange={createProductImagesChange}
                multiple
              />
            </div>

            <div id="createProdFormImg">
              {imagesPreview.map((img, i) => (
                <img src={img} key={i} alt={`${prodData.name}- ${i}-img`} />
              ))}
            </div>

            <Button id="createProdBtn" type="submit" disabled={loading}>
              Create
            </Button>
          </form>
        </div>
      </CreateProductContainer>
    </Fragment>
  )
}
