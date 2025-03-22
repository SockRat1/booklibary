import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchbyauthor: "",
  searchbytitle: "",
  onlyfavorite: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchByAuthor: (state, action) => {
      state.searchbyauthor = action.payload;
    },
    setSearchByTitle: (state, action) => {
      state.searchbytitle = action.payload;
    },
    setOnlyFavorite: (state, action) => {
      state.onlyfavorite = action.payload;
    },
    resetFilters: () => {
      return {
        searchbyauthor: "",
        searchbytitle: "",
        onlyfavorite: false,
      };
    },
  },
});

export const {
  setSearchByAuthor,
  setSearchByTitle,
  setOnlyFavorite,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
