import { createSlice } from "@reduxjs/toolkit";
import { fetchBook } from "./booksSlice";

const initialState = "";

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (_, action) => {
      return action.payload;
    },
    resetError: () => {
      return "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.rejected, (_, action) => {
      return action.payload;
    });
  },
});

export const { setError, resetError } = errorSlice.actions;
export default errorSlice.reducer;
