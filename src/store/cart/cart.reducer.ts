import { AnyAction } from 'redux';
import { toggleCart, updateCartItems } from './cart.actions';
import { CartItem } from './cart.types';

export const INITIAL_STATE = {
  showCart: false,
  cartItems: []
};

export interface CartState {
  readonly showCart: boolean;
  readonly cartItems: CartItem[];
}

export const cartReducer = (state: CartState = INITIAL_STATE, action: AnyAction): CartState => {
  const {
    payload
  } = action;

  if (updateCartItems.match(action)) {
    return {
      ...state,
      cartItems: payload
    };
  }
  if (toggleCart.match(action)) {
    return {
      ...state,
      showCart: payload
    };
  }
  return state;
};
