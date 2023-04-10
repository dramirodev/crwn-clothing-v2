import {useContext} from "react";
import {CartContext} from "../../context/cart-context/cart.context";
import {CartIconContainer, ItemCountContainer, ShoppingIconContainer} from "./cart-icon.styles";

export function CartIcon() {
  const {toggleCart, totalQuantity} = useContext(CartContext);
  return (
      <CartIconContainer onClick={toggleCart}>
        <ShoppingIconContainer/>
        <ItemCountContainer>{totalQuantity}</ItemCountContainer>
      </CartIconContainer>
  );
}