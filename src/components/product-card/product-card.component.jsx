// jshint esversion:6
import "./product-card.styles.scss";
import { useContext } from "react";

import { ToggleCartContext } from "../../contexts/toggleCart.context";
import Button from "../button/button.component";

const ProductCard = (props) => {
  /* Destructure props */
  const { name, imageUrl, price } = props.product;
  const { addItemToCart } = useContext(ToggleCartContext);

  function addProductToCart() {
    addItemToCart(props.product);
  }

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        buttonType="inverted"
        children="Add to cart"
        onClick={addProductToCart}
      />
    </div>
  );
};

export default ProductCard;
