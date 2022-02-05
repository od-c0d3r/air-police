import { createSlice } from '@reduxjs/toolkit';

const initialState = { air: [], filter: [] };

export const airSlice = createSlice({
  name: 'air',
  initialState,
  reducers: {
    filterByName: (state, action) => {
      const oldAir = JSON.parse(JSON.stringify(state));
      const nameFilter = state.air.filter(
        (country) => country.name.match(new RegExp(action.payload, 'i')),
      );
      return { ...oldAir, filter: nameFilter };
    },
    filterShowAll: (state) => {
      const oldAir = JSON.parse(JSON.stringify(state));
      return { ...oldAir, filter: oldAir.air };
    },
    fetchCountryData: (state, action) => {
      const oldAir = JSON.parse(JSON.stringify(state));
      return {
        air: oldAir.air.concat([action.payload]),
        filter: oldAir.filter.concat([action.payload]),
      };
    },
  },
});

export const {
  filterByName,
  filterShowAll,
  fetchCountryData,
} = airSlice.actions;

export default airSlice.reducer;
