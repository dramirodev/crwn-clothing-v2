import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {CartContext} from "../../context/cart-context/cart.context";
import {Button} from "../button/button";
import {CartItem} from "../cart-item/cart-item";
import {CartDropdownContainer, CartItemsContainer, EmptyMessageContainer} from "./cart-dropdown.styles";

export function CartDropdown() {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  console.log('cartItems', cartItems);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
      <CartDropdownContainer>
        <CartItemsContainer>
          {
            !!cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>) :
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
          }
        </CartItemsContainer>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </CartDropdownContainer>
  );
}