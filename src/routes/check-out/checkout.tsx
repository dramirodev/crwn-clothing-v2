import { useSelector } from 'react-redux';
import { CheckoutItem } from '../../components/checkout-item/checkout-item';
import { selectCartItems, selectCartTotalPrice } from '../../store/cart/cart.selectors';
import './checkout.styles.styles';
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer
} from './checkout.styles.styles';

export function Checkout () {

  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotalPrice);

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Description</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Quantity</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Price</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Remove</span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>
      {
        cartItems.map((cartItem) =>
          <CheckoutItem item={cartItem} key={cartItem.id}/>
        )
      }
      <TotalContainer>Total: {cartTotalPrice} $</TotalContainer>
    </CheckoutPageContainer>
  );
}

export default Checkout;
