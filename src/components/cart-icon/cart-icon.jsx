import {useDispatch, useSelector} from "react-redux";
import {toggleCart} from "../../store/cart/cart.actions";
import {selectCartTotalQuantity} from "../../store/cart/cart.selectors";
import {CartIconContainer, ItemCountContainer, ShoppingIconContainer} from "./cart-icon.styles";

export function CartIcon() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectCartTotalQuantity);

  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };
  return (<CartIconContainer onClick={toggleCartHandler}>
        <ShoppingIconContainer/>
        <ItemCountContainer>{totalQuantity}</ItemCountContainer>
      </CartIconContainer>);
}