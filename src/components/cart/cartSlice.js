import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMinicart: false,
    cartItems: [],
  },
  reducers: {
    showMinicart(state) {
      return (state.showMinicart = true);
    },
    hideMinicart(state) {
      return (state.hideMinicart = false);
    },
    addCart(state, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },
    removeCart(state, action) {
      const idRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => {
        return x.id !== idRemove;
      });
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showMinicart, hideMinicart, addCart, removeCart } = actions;
export default reducer;
