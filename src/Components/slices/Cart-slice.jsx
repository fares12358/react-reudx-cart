import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload)
    },
    removeFromCart: (state, action) => {
      return state.filter((product)=>(product.id !== action.payload.id))
    },
    clear: (state, action) => {
      return []
    },
  },
});
export const { addToCart, removeFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
