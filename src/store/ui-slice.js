/* 
* slice for toggle cart component
* shown when it's clicked
* uiSlice.actions is react-redux convention
* @USED on CartButton.js
*/

import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: true },
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;