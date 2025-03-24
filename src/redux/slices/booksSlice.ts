import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 } from "uuid";
import { getRandomInt, getRandomLetter } from "../../utils/bookUtils";

type TypeBook = {
  id: string;
  title: string;
  author: string;
  isFavorite: boolean;
};
type state = {
  books: TypeBook[];
  isLoading: boolean;
};

const initialState: state = {
  books: [],
  isLoading: false,
};

export const fetchBook = createAsyncThunk<TypeBook, void>("books/fetchBook", async (_, { rejectWithValue }) => {
  try {
    const query = getRandomLetter();
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDJjChH0fxkFnoJIn67qw1dypLzB-fPTbA`;
    const res = await axios.get(url);

    if (res.status !== 200) {
      return rejectWithValue(`Network error: ${res.status}`);
    }

    const books = res.data.items;
    if (!books?.length) {
      return rejectWithValue("Books not found");
    }
    const randomBook = books[getRandomInt(0, books.length - 1)];
    const { title = "Unknown title", authors } = randomBook.volumeInfo;

    return {
      id: v4(),
      title,
      author: authors?.join(", ") || "Unknown author",
      isFavorite: false,
    };
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(`Error: ${error.message || "Unexpected error"}`);
    }
    return rejectWithValue("Unknown error");
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
    toggleFavorite: (state, action: PayloadAction<string>) => {
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
export type { TypeBook };
export default booksSlice.reducer;
