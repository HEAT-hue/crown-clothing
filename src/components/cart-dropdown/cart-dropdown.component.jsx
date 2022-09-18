import "./cart-dropdown.styles.scss";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ToggleCartContext } from "../../contexts/toggleCart.context";

/* Single cart item to display */
import CartItem from "../cart-item/cart-item.component";

/*Button component */
import Button from "../button/button.component";

const CartDropdown = () => {
  const { cartItems } = useContext(ToggleCartContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem cartItem={item} key={item.id} />;
          })
        ) : (
          <span>Your cart is empty</span>
        )}
      </div>
      <Button children="CHECKOUT" onClick={handleCheckout} />
    </div>
  );
};

export default CartDropdown;
