import {createSelector} from "reselect";

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector([selectCartReducer], cartSlice => cartSlice.cartItems);

export const selectCartTotalPrice = createSelector([selectCartReducer], cartSlice => cartSlice.cartTotalPrice);

export const selectCartTotalQuantity = createSelector([selectCartReducer], cartSlice => cartSlice.totalQuantity);

export const selectCartShow = createSelector([selectCartReducer], cartSlice => cartSlice.showCart);
