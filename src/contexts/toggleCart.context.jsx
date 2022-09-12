// jshint: esversion:6
import { createContext, useEffect, useState } from "react";

const decreaseCartItemQty = (cartItems, productId) => {
  // Look for existing product item and decrease quantity
  const updatedCartArray = cartItems.map((item) => {
    if (item.id === productId) {
      return item.quantity === 1
        ? item
        : { ...item, quantity: item.quantity - 1 };
    }

    return item;
  });

  return updatedCartArray;
};

const addCartItem = (cartItems, productItem) => {
  // Check if product item exists, returns matched object
  const existingCartItem = cartItems.find((item) => {
    return item.id === productItem.id;
  });

  // if found, increase quantity
  if (existingCartItem) {
    // Map through cart items to update the exisiting one and return new array
    return cartItems.map((cartItem) => {
      if (cartItem.id === existingCartItem.id)
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        }; /* Return updated value */
      return cartItem; /* Return unmatched cart item to new array */
    });
  }

  // return cart items if none is found, with quantity of 1
  return [...cartItems, { ...productItem, quantity: 1 }];
};

const removeCartItem = (cartItems, productId) => {
  /* Use filter to remove all elements that doesn't match Id */
  const updatedCartItems = cartItems.filter((cartItem) => {
    return cartItem.id !== productId;
  });

  return updatedCartItems;
};

export const ToggleCartContext = createContext({
  toggle: false,
  setToggle: () => {},
  cartItems: [{}],
  addItemToCart: () => {},
  quantity: 0,
});

export const ToggleCartContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalCartItems = cartItems.reduce((total, { quantity }) => {
      return total + quantity;
    }, 0);
    setCartCount(totalCartItems);
  }, [cartItems]);

  useEffect(() => {
    const cartTotalPrice = cartItems.reduce((total, { price, quantity }) => {
      return total + parseInt(price) * parseInt(quantity);
    }, 0);
    setTotalPrice(cartTotalPrice);
  }, [cartItems]);

  // const addItemToCart
  const addItemToCart = (productToAddItem) => {
    const cartArray = addCartItem(cartItems, productToAddItem);
    setCartItems(cartArray);
  };

  const decreaseItemQty = (productId) => {
    const cartArray = decreaseCartItemQty(cartItems, productId);
    setCartItems(cartArray);
  };

  // remove item from cart
  const removeItemFromCart = (productId) => {
    const cartArray = removeCartItem(cartItems, productId);
    setCartItems(cartArray);
  };

  const value = {
    toggle,
    setToggle,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    decreaseItemQty,
    totalPrice,
  };

  return (
    <ToggleCartContext.Provider value={value}>
      {children}
    </ToggleCartContext.Provider>
  );
};
