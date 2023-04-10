import {useContext} from "react";
import {CartContext} from "../../context/cart-context/cart.context";
import {Button, BUTTON_TYPES} from "../button/button";
import {
  ProductCardContainer,
  ProductCardFooter,
  ProductCardImage,
  ProductCardName,
  ProductCardPrice
} from "./product-card.styles";

export default function ProductCard({product}) {
  const {addItemToCart} = useContext(CartContext);
  const {
    name,
    imageUrl,
    price
  } = product;

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
      <ProductCardContainer>
        <ProductCardImage src={imageUrl} alt={name}/>
        <ProductCardFooter>
          <ProductCardName>{name}</ProductCardName>
          <ProductCardPrice>{price}</ProductCardPrice>
        </ProductCardFooter>
        <Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>Add to cart</Button>
      </ProductCardContainer>
  );
}