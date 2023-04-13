import {Fragment, useContext} from 'react';
import {useSelector} from "react-redux";
import {Outlet} from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {CartDropdown} from "../../components/cart-dropdown/cart-dropdown";
import {CartIcon} from "../../components/cart-icon/cart-icon";
import {CartContext} from "../../context/cart-context/cart.context";
import {selectCurrentUser} from "../../store/user/user.selectors";
import {signOutAuthUser} from "../../utils/firebase/firebase.utils";

import './navigation.styles';
import {LogoContainer, NavigationContainer, NavLink, NavLinksContainer} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const {showCart} = useContext(CartContext);

  return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer className="logo-container" to="/">
            <CrwnLogo className="logo"/>
          </LogoContainer>
          <NavLinksContainer>
            <NavLink className="nav-link" to="/shop">
              SHOP
            </NavLink>
            {currentUser ? (<NavLink as="span" onClick={signOutAuthUser}>SIGN OUT</NavLink>)
                : (<NavLink className="nav-link" to="/auth">
                      SIGN IN
                    </NavLink>
                )
            }
            <CartIcon/>
          </NavLinksContainer>
          {showCart && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
  );
};

export default Navigation;
