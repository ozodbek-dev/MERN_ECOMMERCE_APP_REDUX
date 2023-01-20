import { ADD_TO_CART, REMOVE_CART_ITEM, SAVE_SHIPPING_INFO } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [], shippingInfo:{} }, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const isItemExist = state.cartItems.find(
        (i) => i.product === payload.product
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? payload : i
          ),
        };
      } else
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
        };
    case REMOVE_CART_ITEM:
      return{
        ...state,
        cartItems:state.cartItems.filter(i=>i.product !== payload)
      }
    case SAVE_SHIPPING_INFO:
      return{
        ...state,
        shippingInfo:payload
      }
        default:
      return state;
  }
};
