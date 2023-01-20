import axios from "axios";

import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_RESET,
  NEW_REVIEW_FAIL,
} from "../constants/productConstants";


//get Products
export const getProduct = (keyword='', currentPage=1,price=[0,2500],category,rating=0 ) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
  
   let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&rating[gte]=${rating}&category=${category}`

    if(!category || category === "all"){
    link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&rating[gte]=${rating}`
    }

    const { data } = await axios.get(link);

    dispatch({ type: ALL_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: err.response.data.msg,
    });
  }
};
//getting product details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data.product });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: err.response.data.msg,
    });
  }
};


// new Review
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });


    const config = {
      headers:{
        "Content-Type":"application/json"
      }
    }

    const { data } = await axios.put(`/api/v1/review`,reviewData,config);

    dispatch({ type: NEW_REVIEW_SUCCESS, payload: data.success });
  } catch (err) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: err.response.data.msg,
    });
  }
};


//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
