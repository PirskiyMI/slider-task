import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};
