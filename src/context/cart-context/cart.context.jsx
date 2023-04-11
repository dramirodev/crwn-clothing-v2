import {createContext, useCallback, useMemo, useReducer} from "react";
import {createAction} from "../../utils/reducers/reducer.utils";
import {
  addCartItem,
  calculateTotal,
  calculateTotalItems,
  decrementCartItem,
  removeCartItem
} from "./cart-context.utils";

export const CartContext = createContext({
  addItemToCart: () => null,
  cartItems: [],
  cartTotalPrice: 0,
  decrementQuantityByOneItem: () => null,
  removeItemFromCart: () => null,
  showCart: false,
  toggleCart: () => null,
  totalQuantity: 0
});

export const CART_ACTIONS_TYPES = {
  TOGGLE_CART: 'TOGGLE_CART',
  SET_ITEMS_TO_CART: 'SET_ITEMS_TO_CART',
};

export const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'TOGGLE_CART':
      return {
        ...state,
        showCart: !state.showCart
      };
    case 'SET_ITEMS_TO_CART':
      return {
        ...state,
        ...payload
      };

    default:
      throw new Error(`Unhandled action type: ${type} in cartReducer`);
  }
};

export const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
  totalQuantity: 0,
  cartTotalPrice: 0
};

export function CartProvider({children}) {

  const [{cartItems, totalQuantity, cartTotalPrice, showCart}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const toggleCart = useCallback(() => {
    dispatch(createAction(CART_ACTIONS_TYPES.TOGGLE_CART));
  }, [dispatch]);

  const updateCartItems = useCallback((cartItems) => {
    const payload = {
      cartItems,
      totalQuantity: calculateTotalItems(cartItems),
      cartTotalPrice: calculateTotal(cartItems)
    };
    dispatch(createAction(CART_ACTIONS_TYPES.SET_ITEMS_TO_CART, payload));
  }, [dispatch]);

  const addItemToCart = useCallback((item) => {
    updateCartItems(addCartItem(cartItems, item));
  }, [updateCartItems, cartItems]);

  const removeItemFromCart = useCallback((item) => {
    updateCartItems(removeCartItem(cartItems, item));
  }, [updateCartItems, cartItems]);

  const decrementQuantityByOneItem = useCallback((item) => {
    updateCartItems(decrementCartItem(cartItems, item));
  }, [updateCartItems, cartItems]);

  const value = useMemo(() => ({
    addItemToCart,
    cartItems,
    cartTotalPrice,
    decrementQuantityByOneItem,
    removeItemFromCart,
    showCart,
    toggleCart,
    totalQuantity,
  }), [
    toggleCart,
    addItemToCart,
    cartItems,
    cartTotalPrice,
    decrementQuantityByOneItem,
    removeItemFromCart,
    showCart,
    totalQuantity,
  ]);


  return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
  );
}