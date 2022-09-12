// jshint esversion:6
import "./checkout.styles.scss";

import { useContext, useEffect } from "react";

import { ToggleCartContext } from "../../contexts/toggleCart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckOutPage = () => {
  const { cartItems, toggle, setToggle, totalPrice } =
    useContext(ToggleCartContext);

  /* Remove checkout dropdown in checkout page */
  useEffect(() => {
    setToggle(false);
  }, [toggle]);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} item={cartItem} />;
      })}
      <span className="total">TOTAL: ${totalPrice}</span>
    </div>
  );
};

export default CheckOutPage;
