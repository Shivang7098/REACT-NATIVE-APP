// store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import messageSlice from './messageSlice';

const store = configureStore({
  reducer: {
    Auth: authSlice,
    Message:messageSlice

    // Add other reducers here if needed
  },
});

export default store;


