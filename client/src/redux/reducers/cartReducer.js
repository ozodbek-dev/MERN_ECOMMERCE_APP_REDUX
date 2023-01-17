import { ADD_TO_CART, REMOVE_CART_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, { type, payload }) => {
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
        default:
      return state;
  }
};
