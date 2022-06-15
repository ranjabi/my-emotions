import { createSlice } from '@reduxjs/toolkit';

export interface TrackerState {
  tracker: Array<object>
}

const trackerSlice = createSlice({
  name: 'tracker',
  initialState: {
    tracker: [],
  },
  reducers: {
    addEmotion(state) {
      console.log('add emotion');
      
    },
  },
});

export const { addEmotion } = trackerSlice.actions;

export default trackerSlice.reducer