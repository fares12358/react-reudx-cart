// store.js
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../slices/Product-slice";
import CartSlice from "../slices/Cart-slice";

export const store = configureStore({
  reducer: {
    products: ProductSlice,
    cart: CartSlice,
  },
});

export default store;
