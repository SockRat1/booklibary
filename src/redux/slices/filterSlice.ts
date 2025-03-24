import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type state = {
  searchbyauthor: string;
  searchbytitle: string;
  onlyfavorite: boolean;
};

const initialState: state = {
  searchbyauthor: "",
  searchbytitle: "",
  onlyfavorite: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchByAuthor: (state, action: PayloadAction<string>) => {
      state.searchbyauthor = action.payload;
    },
    setSearchByTitle: (state, action: PayloadAction<string>) => {
      state.searchbytitle = action.payload;
    },
    setOnlyFavorite: (state, action: PayloadAction<boolean>) => {
      state.onlyfavorite = action.payload;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { setSearchByAuthor, setSearchByTitle, setOnlyFavorite, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
