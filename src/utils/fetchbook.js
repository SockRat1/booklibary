import { Book } from "@mui/icons-material";
import { v4 } from "uuid";
import { setText, toggleOpen } from "../redux/slices/errorSlice";
import { addBook } from "../redux/slices/booksSlice";

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default async (dispatch) => {
  try {
    const az = "abcdefghijklmnopqrstuvwxyz";
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?key=AIzaSyDJjChH0fxkFnoJIn67qw1dypLzB-fPTbA&q=${
        az[randomInRange(0, 25)]
      }`
    );
    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const json = await response.json();

    if (!json.items || json.items.length === 0) {
      throw new Error("Книги не найдены");
    }

    const item = json.items[randomInRange(0, json.items.length - 1)];
    const authors = item.volumeInfo.authors?.join(", ");

    const book = {
      id: v4(),
      title: item.volumeInfo.title || "Uknown title",
      author: authors,
      isFavorite: false,
    };
    dispatch(addBook(book));
  } catch (error) {
    dispatch(setText(error.message));
    dispatch(toggleOpen());
  }
};
