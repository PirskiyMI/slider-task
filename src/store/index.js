import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import sliderReducer from './reducers/sliderReducer';

export const rootReducer = combineReducers({
   sliderReducer,
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};
