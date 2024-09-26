import { createSelector } from "@reduxjs/toolkit";
const cartItemselector = (state) => {
  return state.cart.cartItems;
};
export const cartItemsCountSelector = createSelector(
  cartItemselector,
  (cartItems) => {
    return cartItems.reduce((count, item) => {
      return count + item.quantity;
    }, 0);
  }
);
export const totalCountSelector = createSelector(
  cartItemselector,
  (cartItems) => {
    return cartItems.reduce((count, item) => {
      return count + item.product.priceProduct * item.quantity;
    }, 0);
  }
);
