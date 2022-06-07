import { createSlice } from "@reduxjs/toolkit";

/* save createSlice to a const direclty, not as a returned function */
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  /* cart actions */
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        /* create format for new added object */
        state.items.push({
          id: newItem.id,
          score: newItem.score,
          quantity: 1,
          totalScore: newItem.score,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalScore += newItem.score;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true; //?
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalScore -= existingItem.score;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
