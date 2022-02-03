import { createSlice } from '@reduxjs/toolkit';

const initialState = { air: [], filter: [] };

export const airSlice = createSlice({
  name: 'air',
  initialState,
  reducers: {
    initState: (state, action) => (
      {
        air: state.air.concat(action.payload),
        filter: state.air.concat(action.payload),
      }
    ),
    filterByName: (state, action) => {
      const newFilter = state.air.filter(
        (country) => country.name.match(new RegExp(action.payload, 'i')),
      );
      const oldAir = JSON.parse(JSON.stringify(state));
      const newState = { ...oldAir, filter: newFilter };
      return newState;
    },
    filterShowAll: (state) => {
      const oldAir = JSON.parse(JSON.stringify(state));
      const newState = { ...oldAir, filter: oldAir.air };
      return newState;
    },
  },
});

export const { initState, filterByName, filterShowAll } = airSlice.actions;
export default airSlice.reducer;
