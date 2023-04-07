import {Button} from "../button/button";
import "./product-card.scss";

export default function ProductCard({product}) {
  const {
    id,
    name,
    imageUrl,
    price
  } = product;
  return (
      <div className="product-card-container">
        <img src={imageUrl} alt={name}/>
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button buttonType={"inverted"}>Add to cart</Button>
      </div>
  );
}