import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selectors';
import { CategoryItem } from '../../store/categories/categories.types';
import { Button, BUTTON_TYPES as BUTTON_TYPE } from '../button/button';

import { Footer, Name, Price, ProductCartContainer, } from './product-card.styles';

interface ProductCardProps {
  product: CategoryItem;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    name,
    price,
    imageUrl
  } = product;
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (<ProductCartContainer>
    <img src={imageUrl} alt={`${name}`}/>
    <Footer>
      <Name>{name}</Name>
      <Price>{price}</Price>
    </Footer>
    <Button
      buttonType={BUTTON_TYPE.inverted}
      onClick={addProductToCart}
    >
      Add to card
    </Button>
  </ProductCartContainer>);
};

export default ProductCard;
