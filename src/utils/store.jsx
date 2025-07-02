import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/tutorial/counter/counterSlice'
import authReducer from "../redux/login/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
})