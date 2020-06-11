export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingItem.quantity <= 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  } else {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToRemove.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          }
        : cartItem;
    });
  }
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};
