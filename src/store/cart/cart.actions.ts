import { addCartItem, decrementCartItem, removeCartItem } from '../../utils/cart/cart.utils';
import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducers/reducer.utils';
import { CategoryItem } from '../categories/categories.types';
import { CART_ACTIONS_TYPES, CartItem } from './cart.types';

export type ToggleCartAction = ActionWithPayload<CART_ACTIONS_TYPES.TOGGLE_CART, boolean>;
export type UpdateCartItemsAction = ActionWithPayload<CART_ACTIONS_TYPES.SET_ITEMS_TO_CART, CartItem[]>

export const toggleCart = withMatcher((isOpen: boolean): ToggleCartAction => createAction(CART_ACTIONS_TYPES.TOGGLE_CART, isOpen));

export const updateCartItems = withMatcher((cartItems: CartItem[]): UpdateCartItemsAction => createAction(CART_ACTIONS_TYPES.SET_ITEMS_TO_CART, cartItems));

export function addItemToCart (cartItems: CartItem[], item: CategoryItem) {
  const newCartItems = addCartItem(cartItems, item);
  return updateCartItems(newCartItems);
}

export function removeItemFromCart (cartItems: CartItem[], item: CartItem) {
  const newCartItems = removeCartItem(cartItems, item);
  return updateCartItems(newCartItems);
}

export function decrementQuantityByOneItem (cartItems: CartItem[], item: CartItem) {
  const newCartItems = decrementCartItem(cartItems, item);
  return updateCartItems(newCartItems);
}

