// jshint: esversion:6
import { createContext, useEffect, useState } from "react";

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

  useEffect(() => {
    const totalQuantities = cartItems.reduce((total, { quantity }) => {
      return total + quantity;
    }, 0);
    setCartCount(totalQuantities);
  }, [cartItems]);

  // const addItemToCart
  const addItemToCart = async (productToAddItem) => {
    const cartArray = addCartItem(cartItems, productToAddItem);
    await setCartItems(cartArray);
  };

  const value = { toggle, setToggle, addItemToCart, cartItems, cartCount };

  return (
    <ToggleCartContext.Provider value={value}>
      {children}
    </ToggleCartContext.Provider>
  );
};
