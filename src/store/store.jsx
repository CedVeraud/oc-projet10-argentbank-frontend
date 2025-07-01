import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/tutorial/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})