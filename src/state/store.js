import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { reduxBatch } from '@manaflair/redux-batch'
import airReducer from './air/airReducer';

export const store = configureStore({
  reducer: {
    air: airReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch],
});
