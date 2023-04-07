import "./cart-dropdown.styles.scss";
import {Button} from "../button/button";

export function CartDropdown() {
  return (
      <div className="cart-dropdown-container">
        <div className="cart-items"/>
        <Button>GO TO CHECKOUT</Button>
      </div>
  );
}