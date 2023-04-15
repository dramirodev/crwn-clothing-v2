import {createSelector} from "reselect";
import {calculateTotalItems, calculateTotalQuantity} from "../../utils/cart/cart.utils";

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector([selectCartReducer], cart => cart.cartItems);

export const selectCartTotalPrice = createSelector([selectCartItems], cartItems => calculateTotalQuantity(cartItems));

export const selectCartTotalQuantity = createSelector([selectCartItems], cartItems => calculateTotalItems(cartItems));

export const selectCartShow = createSelector([selectCartReducer], cart => cart.showCart);
