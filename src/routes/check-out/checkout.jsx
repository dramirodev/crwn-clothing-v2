import {useContext} from "react";
import {CheckoutItem} from "../../components/checkout-item/checkout-item";
import {CartContext} from "../../context/cart-context/cart.context";
import "./checkout.styles.scss";

export function Checkout() {

  const {cartItems, cartTotalPrice} = useContext(CartContext);

  return (
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
          {
            cartItems.map((cartItem) =>
                <CheckoutItem item={cartItem} key={cartItem.id}/>
            )
          }
          <span className="total">Total: {cartTotalPrice} $</span>
      </div>
  );
}
