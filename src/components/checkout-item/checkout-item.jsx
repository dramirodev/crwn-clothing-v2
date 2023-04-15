import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {addItemToCart, decrementQuantityByOneItem, removeItemFromCart} from "../../store/cart/cart.reducer";
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
  const dispatch = useDispatch();

  const incrementItemHandler = useCallback(() => {
    dispatch(addItemToCart(item));
  }, [dispatch, item]);

  const removeItemHandler = useCallback(() => {
    dispatch(removeItemFromCart(item));
  }, [dispatch, item]);

  const decrementItemHandler = useCallback(() => {
    dispatch(decrementQuantityByOneItem(item));
  }, [dispatch, item]);

  return (<CheckoutItemContainer>
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