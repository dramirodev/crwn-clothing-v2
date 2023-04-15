import {createSlice} from "@reduxjs/toolkit";
import {addCartItem, decrementCartItem, removeCartItem} from "../../utils/cart/cart.utils";

export const INITIAL_STATE = {
  showCart: false, cartItems: [], totalQuantity: 0, cartTotalPrice: 0
};

export const cartSlice = createSlice({
  name: 'cart', initialState: INITIAL_STATE, reducers: {
    toggleCart: (state, action) => {
      state.showCart = action.payload;
    },
    addItemToCart: (state, action) => {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    decrementQuantityByOneItem: (state, action) => {
      state.cartItems = decrementCartItem(state.cartItems, action.payload);
    }
  }
});


export const {toggleCart, addItemToCart, removeItemFromCart, decrementQuantityByOneItem} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;