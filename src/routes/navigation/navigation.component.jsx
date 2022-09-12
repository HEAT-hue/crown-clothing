// jshint esversion:6
/* Import React Components */
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

/* Import Styles, SVGs */
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

/* Import User Defined Components */
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

/* Import Features */
import { signOutUser } from "../../utils/firebase/firebaseAuth.util";

/* Import Contexts */
import { UserContext } from "../../contexts/user.context";
import { ToggleCartContext } from "../../contexts/toggleCart.context";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { toggle } = useContext(ToggleCartContext);

  function handleSignOut() {
    /* Auth state changes, sets current user to null*/
    signOutUser();
  }

  return (
    <div>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {/* URL gets replaced without refreshing the page */}
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {toggle && <CartDropdown />}
      </div>
      {/* Render specific web page depending on matching url Clicked */}
      <Outlet />
    </div>
  );
}

export default Navigation;
