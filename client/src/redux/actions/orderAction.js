import {
  CLEAR_ERRORS,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  MY_ORDERS_SUCCESS,MY_ORDERS_FAIL,MY_ORDERS_REQUEST,ORDER_DETAILS_SUCCESS,ORDER_DETAILS_FAIL ,ORDER_DETAILS_REQUEST
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

console.log(data)
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (err) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: err.response.data.message });
  }
};


//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
