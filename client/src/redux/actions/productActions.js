import axios from "axios";

import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });

    const { data } = await axios.get("/api/v1/products");

    dispatch({ type: ALL_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: err.response.data.msg,
    });
  }
};

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

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
