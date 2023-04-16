import { createSelector } from 'reselect';
import { calculateTotal, calculateTotalItems } from '../../utils/cart/cart.utils';
import { RootState } from '../root.reducer';
import { CartState } from './cart.reducer';

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector([selectCartReducer], cartSlice => cartSlice.cartItems);

export const selectCartTotalPrice = createSelector([selectCartItems], cartItems => calculateTotal(cartItems));

export const selectCartTotalQuantity = createSelector([selectCartItems], cartItems => calculateTotalItems(cartItems));

export const selectCartShow = createSelector([selectCartReducer], cartSlice => cartSlice.showCart);
