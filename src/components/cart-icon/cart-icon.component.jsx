// jshint esversion:6
import { useContext } from "react";

import { ToggleCartContext } from "../../contexts/toggleCart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { setToggle, cartCount } = useContext(ToggleCartContext);

  function handleClick() {
    setToggle((previousValue) => {
      return !previousValue;
    });
  }

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
