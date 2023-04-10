import {useContext} from "react";
import {CheckoutItem} from "../../components/checkout-item/checkout-item";
import {CartContext} from "../../context/cart-context/cart.context";
import "./checkout.styles.styles";
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer
} from "./checkout.styles.styles";

export function Checkout() {

  const {cartItems, cartTotalPrice} = useContext(CartContext);

  return (
      <CheckoutPageContainer>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer>
            <span>Product</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Description</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Quantity</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Price</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Remove</span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
          cartItems.map((cartItem) =>
              <CheckoutItem item={cartItem} key={cartItem.id}/>
          )
        }
        <TotalContainer>Total: {cartTotalPrice} $</TotalContainer>
      </CheckoutPageContainer>
  );
}
