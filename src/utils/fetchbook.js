import { Book } from "@mui/icons-material";
import { v4 } from "uuid";

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default async () => {
  const az = "abcdefghijklmnopqrstuvwxyz";
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?key=AIzaSyDJjChH0fxkFnoJIn67qw1dypLzB-fPTbA&q=${
      az[randomInRange(0, 25)]
    }`
  );
  const json = await response.json();
  const item = json.items[randomInRange(0, json.items.length - 1)];
  const authors = item.volumeInfo.authors?.join(", ") || "Unknown Author";

  return {
    id: v4(),
    title: item.volumeInfo.title,
    author: authors,
    isFavorite: false,
  };
};
