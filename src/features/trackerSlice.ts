import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TrackerState {
  date: string;
  emo: string;
}

const dateExists = (date: string, state: TrackerState[]) =>
  state.some((object) => object.date === date);

const initialState: TrackerState[] = JSON.parse(localStorage.getItem('trackerItems') || '[]');

const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    addEmotion(state, action: PayloadAction<TrackerState>) {
      if (dateExists(action.payload.date, state)) {
        alert('You have added the emotion for today. Try again tomorrow.');
        return;
      }
      state.push(action.payload);
      window.localStorage.setItem('trackerItems', JSON.stringify(state))
      alert('The emotion has been successfully added.');
      console.log(JSON.stringify(state));
    },
  },
});

export const { addEmotion } = trackerSlice.actions;

export default trackerSlice.reducer;
