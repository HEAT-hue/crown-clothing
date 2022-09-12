import "./checkout-item.styles.scss";

import { useContext } from "react";

import { ToggleCartContext } from "../../contexts/toggleCart.context";

function CheckoutItem(props) {
  const { id, name, imageUrl, price, quantity } = props.item;

  const { addItemToCart, decreaseItemQty, removeItemFromCart } =
    useContext(ToggleCartContext);

  function clearItem() {
    removeItemFromCart(id);
  }

  function decreaseQty() {
    decreaseItemQty(id);
  }

  function increaseQty() {
    addItemToCart(props.item);
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseQty}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={increaseQty}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;

