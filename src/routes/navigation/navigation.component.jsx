// jshint esversion:6

import "./navigation.styles.scss";
import { Outlet, Link } from "react-router-dom";

/* Get Logo SVG as a React Component */
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {/* URL gets replaced without refreshing the page */}
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-up">
            SIGN UP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      {/* Render specific web page depending on matching url Clicked */}
      <Outlet />
    </>
  );
}

export default Navigation;
