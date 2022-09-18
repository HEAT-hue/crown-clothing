// jshint esversion:6
// import "./product-card.styles.scss";
import { useContext } from "react";

import { ToggleCartContext } from "../../contexts/toggleCart.context";
import Button from "../button/button.component";

import {
  ProductCardContainer,
  Img,
  Footer,
  ButtonContainer,
} from "./product-card.styles";

const ProductCard = (props) => {
  /* Destructure props */
  const { name, imageUrl, price } = props.product;
  const { addItemToCart } = useContext(ToggleCartContext);

  function addProductToCart() {
    addItemToCart(props.product);
  }

  /* Classnames added to styled component allows us to refer to them in hover state of their parent containers */

  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </Footer>
      <ButtonContainer>
        <Button
          buttonType="inverted"
          children="Add to cart"
          onClick={addProductToCart}
        />
      </ButtonContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
