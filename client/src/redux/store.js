import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from "redux-thunk"

import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducer, productReducer,newReviewReducer, newProductReducerAdmin, productReducerAdmin, productReviewsReducerAdmin, reviewReducerAdmin  } from './reducers/productReducer';
import { allUsersReducerAdmin, forgotPasswordReducer, profileReducer, userDetailsReducerAdmin, userReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducer';
import { allOrdersReducersAdmin, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducerAdmin } from './reducers/orderReducer';

const reducer = combineReducers({
  products:productReducer,
  productDetails:productDetailsReducer,
  user:userReducer, 
  profile:profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart:cartReducer,
  newOrder: newOrderReducer,
  myOrders:myOrdersReducer,
  orderDetails:orderDetailsReducer,
  newReview:newReviewReducer,
  newProductAdmin:newProductReducerAdmin,
  productAdmin: productReducerAdmin,
  allOrders: allOrdersReducersAdmin,
  orderAdmin:orderReducerAdmin,
  allUsersAdmin:allUsersReducerAdmin,
  userDetailsAdmin: userDetailsReducerAdmin,
  productReviewsAdmin: productReviewsReducerAdmin,
reviewAdmin : reviewReducerAdmin
})

let initialState= {
  cart:{
    cartItems:localStorage.getItem("cartItems") ? 
      JSON.parse(localStorage.getItem("cartItems")) :[],
    shippingInfo:localStorage.getItem("shippingInfo") ? JSON.parse(localStorage.getItem("shippingInfo")) :{}
  }
}

const middleware = [thunk];


const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;