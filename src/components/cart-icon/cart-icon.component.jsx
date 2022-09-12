// jshint esversion:6
import "./cart-icon.styles.scss";
import { useContext } from "react";

import { ToggleCartContext } from "../../contexts/toggleCart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { setToggle, cartCount } = useContext(ToggleCartContext);

  function handleClick() {
    setToggle((previousValue) => {
      return !previousValue;
    });
  }

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
