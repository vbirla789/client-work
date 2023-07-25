import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../redux/slices/userConfigSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userReducer
  },
});
