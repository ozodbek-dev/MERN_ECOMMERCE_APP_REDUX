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
  NEW_REVIEW_FAIL,
  ALL_PRODUCT_REQUEST_ADMIN,
  ALL_PRODUCT_SUCCESS_ADMIN,
  ALL_PRODUCT_FAIL_ADMIN,
  NEW_PROD_REQ_ADMIN,
  NEW_PROD_SUCC_ADMIN,
  NEW_PROD_FAIL_ADMIN,
  DEL_PROD_REQ_ADMIN,
  DEL_PROD_SUCC_ADMIN,
  DEL_PROD_FAIL_ADMIN,
  UPD_PROD_REQ_ADMIN,
  UPD_PROD_SUCC_ADMIN,
  UPD_PROD_FAIL_ADMIN,
  ALL_REVIEW_REQUEST_ADMIN,
  ALL_REVIEW_SUCCESS_ADMIN,
  ALL_REVIEW_FAIL_ADMIN,
  DEL_REVIEW_REQUEST_ADMIN,
  DEL_REVIEW_SUCCESS_ADMIN,
  DEL_REVIEW_FAIL_ADMIN,
} from "../constants/productConstants";

//get Products
export const getProduct =
  (keyword = "", currentPage = 1, price = [0, 2500], category, rating = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });

      let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&rating[gte]=${rating}&category=${category}`;

      if (!category || category === "all") {
        link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&rating[gte]=${rating}`;
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

//get Products --> Admin
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST_ADMIN });

    const { data } = await axios.get("/api/v1/admin/products");

    dispatch({ type: ALL_PRODUCT_SUCCESS_ADMIN, payload: data.products });
  } catch (err) {
    dispatch({
      type: ALL_PRODUCT_FAIL_ADMIN,
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
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(`/api/v1/review`, reviewData, config);

    dispatch({ type: NEW_REVIEW_SUCCESS, payload: data.success });
  } catch (err) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: err.response.data.msg,
    });
  }
};

// create product --> Admin
export const createProductAdmin = (prodData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PROD_REQ_ADMIN });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(`/api/v1/product/new`, prodData, config);

    dispatch({ type: NEW_PROD_SUCC_ADMIN, payload: data });
  } catch (err) {
    dispatch({
      type: NEW_PROD_FAIL_ADMIN,
      payload: err.response.data.msg,
    });
  }
};

// delete product --> Admin
export const deleteProductAdmin = (id) => async (dispatch) => {
  try {
    dispatch({ type: DEL_PROD_REQ_ADMIN });

    const { data } = await axios.delete(`/api/v1/product/${id}`);

    dispatch({ type: DEL_PROD_SUCC_ADMIN, payload: data.success });
  } catch (err) {
    dispatch({
      type: DEL_PROD_FAIL_ADMIN,
      payload: err.response.data.msg,
    });
  }
};

// update product --> Admin
export const updateProductAdmin = (id, updatedData) => async (dispatch) => {
  try {
    dispatch({ type: UPD_PROD_REQ_ADMIN });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.put(
      `/api/v1/product/${id}`,
      updatedData,
      config
    );

    dispatch({ type: UPD_PROD_SUCC_ADMIN, payload: data.success });
  } catch (err) {
    dispatch({
      type: UPD_PROD_FAIL_ADMIN,
      payload: err.response.data.msg,
    });
  }
};

//get all reviews of a product --> Admin
export const getAllreviewsAdmin = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEW_REQUEST_ADMIN });

    const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

    dispatch({ type: ALL_REVIEW_SUCCESS_ADMIN, payload: data.reviews });
  } catch (err) {
    dispatch({
      type: ALL_REVIEW_FAIL_ADMIN,
      payload: err.response.data.msg,
    });
  }
};

//delete review oof a product --> Admin
export const deleteReviewAdmin = (reviewId,prodID) => async (dispatch) => {
  try {
    dispatch({ type: DEL_REVIEW_REQUEST_ADMIN });

    const { data } = await axios.delete(`/api/v1/reviews?id=${reviewId}&productId=${prodID}`);


    dispatch({ type: DEL_REVIEW_SUCCESS_ADMIN, payload: data.success });
  } catch (err) {
    dispatch({
      type: DEL_REVIEW_FAIL_ADMIN,
      payload: err.response.data.msg,
    });
  }
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
