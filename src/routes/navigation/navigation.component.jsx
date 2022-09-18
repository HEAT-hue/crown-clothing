// jshint esversion:6
/* Import React Components */
import { useContext } from "react";
import { Outlet} from "react-router-dom";

/* Import Styles, SVGs */
import {
  StyledNavigationContianer,
  NavLinkContainer,
  NavLink,
  LogoContainer,
} from "./navigation.styles";
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
    <>
      <StyledNavigationContianer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          {/* URL gets replaced without refreshing the page */}
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {toggle && <CartDropdown />}
      </StyledNavigationContianer>
      {/* Render specific web page depending on matching url Clicked */}
      <Outlet />
    </>
  );
}

export default Navigation;
