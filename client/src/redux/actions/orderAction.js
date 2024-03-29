import {
  CLEAR_ERRORS,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  MY_ORDERS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  ALL_ORDERS_REQUEST,
ALL_ORDERS_SUCCESS,
ALL_ORDERS_FAIL
} from "../constants/orederConstants";

import axios from "axios";
//create order
export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/order/new", order, config);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: CREATE_ORDER_FAIL, payload: err.response.data.message });
  }
};

//My Orders
export const myAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDERS_REQUEST });
    const { data } = await axios.get("/api/v1/orders/me");

    dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
  } catch (err) {
    dispatch({ type: MY_ORDERS_FAIL, payload: err.response.data.message });
  }
};

//get ORDER DETTAILS
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/order/${id}`);

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (err) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: err.response.data.message });
  }
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};


//All Orders --> Admin
export const getAllOrdersAdmin = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDERS_REQUEST });

    const { data } = await axios.get("/api/v1/admin/orders");

    dispatch({ type: ALL_ORDERS_SUCCESS, payload: data.orders });
  } catch (err) {
    dispatch({ type: ALL_ORDERS_FAIL, payload: err.response.data.message });
  }
};
// Update Order --> Admin
export const updateOrderAdmin = (id,updatedData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(`/api/v1/admin/order/${id}`, updatedData, config);

    dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.success });
  } catch (err) {
    dispatch({ type: UPDATE_ORDER_FAIL, payload: err.response.data.message });
  }
};

// Delete Order --> Admin
export const deleteOrderAdmin = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ORDER_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/order/${id}` );

    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data.success });
  } catch (err) {
    dispatch({ type: DELETE_ORDER_FAIL, payload: err.response.data.message });
  }
};