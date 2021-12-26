import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { cartSlice } from './../features/main/CartSlice';
import { detailSlice } from './../features/main/DetailSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartSlice.reducer,
    detail: detailSlice.reducer,
  },
});
