import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 } from "uuid";
import { getRandomInt, getRandomLetter } from "../../utils/bookUtils";

const initialState = [];

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (_, { rejectWithValue }) => {
    try {
      const query = getRandomLetter();
      const url = `https://www.gooogleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDJjChH0fxkFnoJIn67qw1dypLzB-fPTbA`;
      const res = await axios.get(url);

      if (res.status !== 200) {
        return rejectWithValue(`Network error: ${res.status}`);
      }

      const books = res.data.items;
      const randomBook = books[getRandomInt(0, books.length - 1)];
      const { title = "Unknown title", authors } = randomBook.volumeInfo;
      if (!books?.length) {
        return rejectWithValue("Books not found");
      }

      return {
        id: v4(),
        title,
        author: authors?.join(", ") || "Unknown author",
        isFavorite: false,
      };
    } catch (error) {
      return rejectWithValue(`Error: ${error.message || "Unexpected error"}`);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export default booksSlice.reducer;
