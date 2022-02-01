import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const airSlice = createSlice({
  name: 'air',
  initialState,
  reducers: {
    initState: (state, action) => action.payload,
  },
});

export const { initState } = airSlice.actions;
export default airSlice.reducer;
