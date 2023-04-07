import {Fragment, useContext} from 'react';
import {Link, Outlet} from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {CartDropdown} from "../../components/cart-dropdown/cart-dropdown";
import {CartIcon} from "../../components/cart-icon/cart-icon";
import {ToggleCartContext} from "../../context/toggle-cart.context";
import {UserContext} from "../../context/user.context";
import {signOutAuthUser} from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {showCart} = useContext(ToggleCartContext);

  return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <CrwnLogo className="logo"/>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            {currentUser ? (
                    <span className="nav-link" onClick={signOutAuthUser}>SIGN OUT</span>)
                : (<Link className="nav-link" to="/auth">
                      SIGN IN
                    </Link>
                )
            }
            <CartIcon/>
          </div>
          {showCart && <CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>
  );
};

export default Navigation;
