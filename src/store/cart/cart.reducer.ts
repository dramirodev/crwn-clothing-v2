import { AnyAction } from 'redux';
import { toggleCart, updateCartItems } from './cart.actions';
import { CartItem } from './cart.types';

export const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
  totalQuantity: 0,
  cartTotalPrice: 0
};

export interface CartState {
  readonly showCart: boolean;
  readonly cartItems: CartItem[];
  readonly totalQuantity: number;
  readonly cartTotalPrice: number;
}

export const cartReducer = (state: CartState = INITIAL_STATE, action: AnyAction): CartState => {
  const {
    payload
  } = action;

  console.log('cartReducer', action);

  if (updateCartItems.match(action)) {
    return {
      ...state,
      ...payload
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
