import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBook } from "./booksSlice";

const initialState: string = "";

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
      return (action.payload as string) || "Unknown error";
    });
  },
});

export const { setError, resetError } = errorSlice.actions;
export default errorSlice.reducer;
