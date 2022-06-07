import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        /* create format for new added object */
        state.items.push({
          itemId: newItem.id,
          score: newItem.score,
          quantity: 1,
          totalScore: newItem.score,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalScore += newItem.score;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      state.changed = true; //?
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalScore -= existingItem.score;
      }
    }
  },
});
