import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "productSlice/fetchData",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

const productSlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      return action.payload; //return data to the initialState
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
