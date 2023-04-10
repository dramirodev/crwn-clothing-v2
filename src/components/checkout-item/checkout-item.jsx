import {useContext} from "react";
import {CartContext} from "../../context/cart-context/cart.context";
import "./checkout-item.styles";
import {
  ArrowContainer,
  CheckoutItemContainer,
  Image,
  ImageContainer,
  NameContainer,
  PriceContainer,
  QuantityContainer,
  RemoveButtonContainer,
  ValueContainer
} from "./checkout-item.styles";

export function CheckoutItem({item}) {
  const {name, imageUrl, price, quantity} = item;
  const {addItemToCart, decrementQuantityByOneItem, removeItemFromCart} = useContext(CartContext);

  const removeItemHandler = () => {
    removeItemFromCart(item);
  };

  const incrementItemHandler = () => {
    addItemToCart(item);
  };

  const decrementItemHandler = () => {
    decrementQuantityByOneItem(item);
  };
  return (
      <CheckoutItemContainer>
        <ImageContainer>
          <Image src={imageUrl} alt={name}/>
        </ImageContainer>
        <NameContainer>{name}</NameContainer>
        <QuantityContainer>
          <ArrowContainer onClick={decrementItemHandler}>
            &#10094;
          </ArrowContainer>
          <ValueContainer>{quantity}</ValueContainer>
          <ArrowContainer onClick={incrementItemHandler}>
            &#10095;
          </ArrowContainer>
        </QuantityContainer>
        <PriceContainer>{price}</PriceContainer>
        <RemoveButtonContainer onClick={removeItemHandler}>
          &#10005;
        </RemoveButtonContainer>
      </CheckoutItemContainer>
  );
}