export function existingItem(cartItems, item) {
  return cartItems?.find(cartItem => cartItem.id === item.id);
}

export function addCartItem(cartItems, cartItemToAdd) {
  console.log('addCartItem', cartItems, cartItemToAdd);

  if (existingItem(cartItems, cartItemToAdd)) {
    return cartItems.map(cartItem => {
      if (cartItem.id === cartItemToAdd.id) {
        return {...cartItem, quantity: cartItem.quantity + 1};
      }
      return cartItem;
    });
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export function removeCartItem(cartItems, cartItemToRemove) {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
}

export function decrementCartItem(cartItems, cartItemToDecrement) {
  if (cartItemToDecrement.quantity === 1) {
    return removeCartItem(cartItems, cartItemToDecrement);
  }
  return cartItems.map(cartItem => {
    if (cartItem.id === cartItemToDecrement.id) {
      return {...cartItem, quantity: cartItem.quantity - 1};
    }
    return cartItem;
  });
}

export function calculateTotal(cartItems) {
  return cartItems.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity * cartItem.price;
  }, 0);
}

export function calculateTotalItems(cartItems) {
  return cartItems.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity;
  }, 0);
}