import {useContext} from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {ToggleCartContext} from "../../context/toggle-cart.context";

import "./cart-icon.styles.scss";

export function CartIcon() {
  const {toggleCart} = useContext(ToggleCartContext);
  return (
      <div className="cart-icon-container" onClick={toggleCart}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
      </div>
  );
}