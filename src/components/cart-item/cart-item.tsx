import type { CartItem as Item } from '../../store/cart/cart.types';
import { CartItemContainer, CartItemImage, ItemDetailsContainer, Name } from './cart-item.styles';

interface CartItemProps {
  cartItem: Item;
}

export function CartItem ({ cartItem }: CartItemProps) {
  const {
    name,
    imageUrl,
    price,
    quantity
  } = cartItem;

  const legend = `${quantity} x ${price}$`;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name}/>
      <ItemDetailsContainer>
        <Name>{name}</Name>
        <span>{legend}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}
