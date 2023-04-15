import { createSelector } from 'reselect';
import { RootState } from '../root.reducer';
import { CartState } from './cart.reducer';

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector([selectCartReducer], cartSlice => cartSlice.cartItems);

export const selectCartTotalPrice = createSelector([selectCartReducer], cartSlice => cartSlice.cartTotalPrice);

export const selectCartTotalQuantity = createSelector([selectCartReducer], cartSlice => cartSlice.totalQuantity);

export const selectCartShow = createSelector([selectCartReducer], cartSlice => cartSlice.showCart);
