import { createSlice } from "@reduxjs/toolkit";
import { fetchTv } from "./tv.actions";

const initialState = {
  tv: [],
  isLoading: false,
  error: null,
};

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    resetErrorMessage: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTv.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTv.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tv = action.payload;
      })
      .addCase(fetchTv.rejected, (state, action) => {
        state.isLoading = false;
        state.tv = [];
        state.error = action.error.message;
      });
  },
});

export const { resetErrorMessage } = tvSlice.actions;

export default tvSlice.reducer;
