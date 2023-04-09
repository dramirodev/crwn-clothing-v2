import {createContext, useCallback, useEffect, useMemo, useState} from "react";
import {addCartItem, decrementCartItem, removeCartItem} from "./cart-context.utils";

export const CartContext = createContext({
  toggleCart: () => null,
  showCart: false,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  decrementQuantityByOneItem: () => null,
  totalQuantity: 0,
  setTotalQuantity: () => null,
  cartTotalPrice: 0
});

export function CartProvider({children}) {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const toggleCart = useCallback(() => {
    setShowCart((show) => !show);
  }, []);

  const addItemToCart = useCallback((item) => {
    setCartItems(addCartItem(cartItems, item));
  }, [cartItems]);

  const removeItemFromCart = useCallback((item) => {
    setCartItems(removeCartItem(cartItems, item));
  }, [cartItems]);

  const decrementQuantityByOneItem = useCallback((item) => {
    setCartItems(decrementCartItem(cartItems, item));
  }, [cartItems]);

  const cartTotalPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }, [cartItems]);

  useEffect(() => {
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(totalQuantity);
  }, [cartItems]);

  const value = useMemo(() => ({
    toggleCart,
    showCart,
    cartItems,
    addItemToCart,
    totalQuantity,
    setTotalQuantity,
    decrementQuantityByOneItem,
    removeItemFromCart,
    cartTotalPrice
  }), [toggleCart,
    showCart,
    cartItems,
    addItemToCart,
    totalQuantity,
    setTotalQuantity,
    decrementQuantityByOneItem,
    removeItemFromCart,
    cartTotalPrice]);


  return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
  );
}