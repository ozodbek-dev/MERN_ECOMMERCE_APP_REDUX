import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_RESET,
  NEW_REVIEW_FAIL,
  ALL_PRODUCT_REQUEST_ADMIN,
  ALL_PRODUCT_SUCCESS_ADMIN,
  ALL_PRODUCT_FAIL_ADMIN,
  NEW_PROD_REQ_ADMIN,
  NEW_PROD_SUCC_ADMIN,
  NEW_PROD_RESET_ADMIN,
  NEW_PROD_FAIL_ADMIN,
  DEL_PROD_REQ_ADMIN,
  DEL_PROD_SUCC_ADMIN,
  DEL_PROD_FAIL_ADMIN,
  DEL_PROD_RESET_ADMIN,
  UPD_PROD_REQ_ADMIN,
  UPD_PROD_SUCC_ADMIN,
  UPD_PROD_FAIL_ADMIN,
  UPD_PROD_RESET_ADMIN,
} from "../constants/productConstants";
import { UPDATE_PASSWORD_REQUEST } from "../constants/userConstants";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
    case ALL_PRODUCT_REQUEST_ADMIN:
      return {
        loading: true,
        products: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProductsCount: action.payload.filteredProductsCount,
      };
    case ALL_PRODUCT_SUCCESS_ADMIN:
      return {
        loading: false,
        products: action.payload,
      };
    case ALL_PRODUCT_FAIL:
    case ALL_PRODUCT_FAIL_ADMIN:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
    case UPDATE_PASSWORD_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newReviewReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: payload,
      };
    case NEW_REVIEW_RESET:
      return {
        ...state,
        success: false,
      };
    case NEW_REVIEW_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

//ADMIN REDUCERS
export const newProductReducerAdmin = (state = { product: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case NEW_PROD_REQ_ADMIN:
      return {
        ...state,
        loading: true,
      };
    case NEW_PROD_SUCC_ADMIN:
      return {
        loading: false,
        success: payload.success,
        product: payload.product,
      };
    case NEW_PROD_RESET_ADMIN:
      return {
        ...state,
        success: false,
      };
    case NEW_PROD_FAIL_ADMIN:
      return {
        loading: false,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const productReducerAdmin = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case DEL_PROD_REQ_ADMIN:
    case UPD_PROD_REQ_ADMIN:
      return {
        ...state,
        loading: true,
      };
    case DEL_PROD_SUCC_ADMIN:
      return {
        ...state,
        loading: false,
        isDeleted: payload,
      };
    case UPD_PROD_SUCC_ADMIN:
      return {
        ...state,
        loading: false,
        isUpdated: payload,
      };
    case DEL_PROD_RESET_ADMIN:
      return {
        ...state,
        isDeleted: false,
      };
    case UPD_PROD_RESET_ADMIN:
      return {
        ...state,
        isUpdated: false,
      };
    case DEL_PROD_FAIL_ADMIN:
    case UPD_PROD_FAIL_ADMIN:
      return {
        loading: false,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
