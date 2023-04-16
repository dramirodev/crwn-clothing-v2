import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, decrementQuantityByOneItem, removeItemFromCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selectors';
import { CartItem } from '../../store/cart/cart.types';
import './checkout-item.styles';
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
} from './checkout-item.styles';

interface CheckoutItemProps {
  item: CartItem;
}

export function CheckoutItem ({ item }: CheckoutItemProps) {
  const {
    name,
    imageUrl,
    price,
    quantity
  } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const incrementItemHandler = useCallback(() => {
    dispatch(addItemToCart(cartItems, item));
  }, [dispatch, cartItems, item]);

  const removeItemHandler = useCallback(() => {
    dispatch(removeItemFromCart(cartItems, item));
  }, [dispatch, cartItems, item]);

  const decrementItemHandler = useCallback(() => {
    dispatch(decrementQuantityByOneItem(cartItems, item));
  }, [dispatch, cartItems, item]);

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
