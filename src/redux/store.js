import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/authSlice.js";
import merchandisesReducer from './features/productSlice.js'
import artistReducer from './features/profileSlice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    merchandises: merchandisesReducer,
    artist: artistReducer
  },
});
