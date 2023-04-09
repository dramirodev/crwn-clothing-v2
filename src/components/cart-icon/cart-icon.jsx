import {useContext} from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {CartContext} from "../../context/cart-context/cart.context";

import "./cart-icon.styles.scss";

export function CartIcon() {
  const {toggleCart, totalQuantity} = useContext(CartContext);
  return (
      <div className="cart-icon-container" onClick={toggleCart}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{totalQuantity}</span>
      </div>
  );
}