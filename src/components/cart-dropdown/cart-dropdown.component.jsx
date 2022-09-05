import "./cart-dropdown.styles.scss";

import { useContext } from "react";

import { ToggleCartContext } from "../../contexts/toggleCart.component";

/* Single cart item to display */
import CartItem from "../cart-item/cart-item.component";

/*Button component */
import Button from "../button/button.component";

const CartDropdown = () => {
  const { cartItems } = useContext(ToggleCartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem cartItem={item} key={item.id} />;
        })}
      </div>
      <Button children="CHECKOUT" />
    </div>
  );
};

export default CartDropdown;
