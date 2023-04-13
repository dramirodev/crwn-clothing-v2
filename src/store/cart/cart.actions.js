import {
  addCartItem,
  calculateTotal,
  calculateTotalItems,
  decrementCartItem,
  removeCartItem
} from "../../context/cart-context/cart-context.utils";
import {createAction} from "../../utils/reducers/reducer.utils";
import {CART_ACTIONS_TYPES} from "./cart.types";

export const toggleCart = () => createAction(CART_ACTIONS_TYPES.TOGGLE_CART);

export const updateCartItems = (cartItems) => {
  const payload = {
    cartItems,
    totalQuantity: calculateTotalItems(cartItems),
    cartTotalPrice: calculateTotal(cartItems)
  };
  return createAction(CART_ACTIONS_TYPES.SET_ITEMS_TO_CART, payload);
};

export const addItemToCart = (cartItems, item) => updateCartItems(addCartItem(cartItems, item));

export const removeItemFromCart = (cartItems, item) => updateCartItems(removeCartItem(cartItems, item));

export const decrementQuantityByOneItem = (cartItems, item) => updateCartItems(decrementCartItem(cartItems, item));

