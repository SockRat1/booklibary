import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "Some error",
  isOpen: false,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setText, toggleOpen } = errorSlice.actions;
export default errorSlice.reducer;
