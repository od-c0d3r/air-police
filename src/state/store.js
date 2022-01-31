import { configureStore } from '@reduxjs/toolkit';
import airReducer from './air/airReducer';

export const store = configureStore({
  reducer: {
    counter: airReducer,
  },
});
