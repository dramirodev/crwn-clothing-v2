import { CartItem } from '../../store/cart/cart.types';
import { CategoryItem } from '../../store/categories/categories.types';

export function existingItem (cartItems: CartItem[], item: CategoryItem) {
  return cartItems?.find(cartItem => cartItem.id === item.id);
}

export function addCartItem (cartItems: CartItem[], item: CategoryItem) {
  console.log('addCartItem', cartItems, item);

  if (existingItem(cartItems, item)) {
    return cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1
        };
      }
      return cartItem;
    });
  }
  return [...cartItems, {
    ...item,
    quantity: 1
  }];
}

export function removeCartItem (cartItems: CartItem[], item: CartItem) {
  return cartItems.filter(cartItem => cartItem.id !== item.id);
}

export function decrementCartItem (cartItems: CartItem[], item: CartItem) {
  if (item.quantity === 1) {
    return removeCartItem(cartItems, item);
  }
  return cartItems.map(cartItem => {
    if (cartItem.id === item.id) {
      return {
        ...cartItem,
        quantity: cartItem.quantity - 1
      };
    }
    return cartItem;
  });
}

export function calculateTotal (cartItems: CartItem[]) {
  if (!cartItems) {
    return 0;
  }
  
  return cartItems.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity * cartItem.price;
  }, 0);
}

export function calculateTotalItems (cartItems: CartItem[] | undefined) {
  if (!cartItems) {
    return 0;
  }
  return cartItems?.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity;
  }, 0);
}
