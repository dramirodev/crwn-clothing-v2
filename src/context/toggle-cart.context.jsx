import {createContext, useState} from "react";

export const ToggleCartContext = createContext({
  toggleCart: () => null,
  showCart: false,
});

export function ToggleCartProvider({children}) {
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
  }

  return (
      <ToggleCartContext.Provider value={{toggleCart, showCart}}>
        {children}
      </ToggleCartContext.Provider>
  );
}