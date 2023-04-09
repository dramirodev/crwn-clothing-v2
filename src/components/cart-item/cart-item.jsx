import "./cart-item.scss";

export function CartItem({cartItem}) {
  const {name, imageUrl, price, quantity} = cartItem;

  const legend = `${quantity} x ${price}$`;
  return (
      <div className="cart-item-container">
        <img src={imageUrl} alt={name}/>
        <div className="item-details">
          <span className="name">{name}</span>
          <span>{legend}</span>
        </div>

      </div>
  );
}