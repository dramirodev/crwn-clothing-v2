import {
  addCartItem,
  calculateTotal,
  calculateTotalItems,
  decrementCartItem,
  removeCartItem
} from "../../utils/cart/cart.utils";
import {createAction} from "../../utils/reducers/reducer.utils";
import {CART_ACTIONS_TYPES} from "./cart.types";

export function toggleCart(isOpen) {
  return createAction(CART_ACTIONS_TYPES.TOGGLE_CART, isOpen);
}

export function updateCartItems(cartItems) {
  const payload = {
    cartItems, totalQuantity: calculateTotalItems(cartItems), cartTotalPrice: calculateTotal(cartItems)
  };
  return createAction(CART_ACTIONS_TYPES.SET_ITEMS_TO_CART, payload);
}

export function addItemToCart(cartItems, item) {
  const newCartItems = addCartItem(cartItems, item);
  updateCartItems(newCartItems);
}

export function removeItemFromCart(cartItems, item) {
  const newCartItems = removeCartItem(cartItems, item);
  updateCartItems(newCartItems);
}

export function decrementQuantityByOneItem(cartItems, item) {
  const newCartItems = decrementCartItem(cartItems, item);
  updateCartItems(newCartItems);
}

