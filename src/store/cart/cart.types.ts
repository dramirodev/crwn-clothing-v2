import { CategoryItem } from '../categories/categories.types';

export enum CART_ACTIONS_TYPES {
  TOGGLE_CART = 'TOGGLE_CART',
  SET_ITEMS_TO_CART = 'SET_ITEMS_TO_CART',
}

export type CartItem = CategoryItem & { quantity: number };
