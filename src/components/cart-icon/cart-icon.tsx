import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../store/cart/cart.actions';
import { selectCartShow, selectCartTotalQuantity } from '../../store/cart/cart.selectors';
import { CartIconContainer, ItemCountContainer, ShoppingIconContainer } from './cart-icon.styles';

export function CartIcon () {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const showCart = useSelector(selectCartShow);

  const toggleCartHandler = () => {
    dispatch(toggleCart(!showCart));
  };
  return (<CartIconContainer onClick={toggleCartHandler}>
    <ShoppingIconContainer/>
    <ItemCountContainer>{totalQuantity}</ItemCountContainer>
  </CartIconContainer>);
}
