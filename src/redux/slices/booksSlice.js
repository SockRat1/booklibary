import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 } from "uuid";
import { getRandomInt, getRandomLetter } from "../../utils/bookUtils";

const initialState = {
  books: [],
  isLoading: false,
};

export const fetchBook = createAsyncThunk("books/fetchBook", async (_, { rejectWithValue }) => {
  try {
    const query = getRandomLetter();
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDJjChH0fxkFnoJIn67qw1dypLzB-fPTbA`;
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
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const books = state.books.filter((book) => book.id !== action.payload);
      return { ...state, books };
    },
    toggleFavorite: (state, action) => {
      const books = state.books.map((book) => (book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book));
      return { ...state, books };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    });
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export default booksSlice.reducer;
