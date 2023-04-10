import {CartItemContainer, CartItemImage, ItemDetailsContainer, Name} from "./cart-item.styles";

export function CartItem({cartItem}) {
  const {name, imageUrl, price, quantity} = cartItem;

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