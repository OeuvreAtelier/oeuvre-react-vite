import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../redux/features/authSlice.js"
import merchandisesReducer from "./features/productSlice.js"
import artistReducer from "./features/profileSlice.js"
import addressReducer from "./features/addressSlice.js"
import storeReducer from "./features/storeSlice.js"
import reviewReducer from "./features/reviewSlice.js"
import transactionReducer from "./features/transactionSlice.js"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    merchandises: merchandisesReducer,
    artist: artistReducer,
    address: addressReducer,
    store: storeReducer,
    review: reviewReducer,
    transaction: transactionReducer,
  },
})
