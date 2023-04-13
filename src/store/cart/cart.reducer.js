import {CART_ACTIONS_TYPES} from "./cart.types";

export const INITIAL_STATE = {
  showCart: false, cartItems: [], totalQuantity: 0, cartTotalPrice: 0
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case CART_ACTIONS_TYPES.TOGGLE_CART:
      return {
        ...state, showCart: payload
      };
    case CART_ACTIONS_TYPES.SET_ITEMS_TO_CART:
      return {
        ...state, ...payload
      };

    default:
      return state;
  }
};