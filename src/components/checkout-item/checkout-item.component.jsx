// import "./checkout-item.styles.scss";

import { useContext } from "react";

import { ToggleCartContext } from "../../contexts/toggleCart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  Name,
  Price,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={decreaseQty}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseQty}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
