import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';

/* 
* reducer receive toggleCart function
*/
const store = configureStore({
  reducer: { ui: uiSlice.reducer}
});

export default store;