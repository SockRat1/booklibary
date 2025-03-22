import {
  Bookmark,
  BookmarkBorder,
  Delete,
  Favorite,
} from "@mui/icons-material";
import {
  Box,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, toggleFavorite } from "../redux/books/actionCreators";

function BookList() {
  const [fav, setFav] = useState(false);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  function handlerDelete(id) {
    dispatch(deleteBook(id));
  }
  function handleFavorite(e, id) {
    dispatch(toggleFavorite(id));
    setFav(e.target.checked);
  }
  return (
    <Box
      sx={{
        py: "2rem",
        width: { sx: "30rem", md: "60rem" },
        height: "25rem",
        textAlign: "center",
        border: "0.1rem solid",
        borderColor: "grey.500",
        borderRadius: "0.5rem",
      }}
    >
      <Typography variant="h3" component="span">
        Book list
      </Typography>
      <List
        sx={{
          maxHeight: "19rem",
          overflowY: "auto",
        }}
      >
        {books.map((val, index) => {
          return (
            <ListItem
              key={val.id}
              sx={{
                backgroundColor: index % 2 != 0 ? "grey.100" : null,
                borderBottom: "0.1rem solid",
                borderBottomColor: "grey.500",
                px: 2,
              }}
            >
              <ListItemText primary={val.title} secondary={val.author} />
              <Checkbox
                icon={<BookmarkBorder />}
                checkedIcon={<Bookmark />}
                checked={fav}
                onChange={(e) => handleFavorite(e, val.id)}
              />
              <IconButton
                sx={{ ml: "auto" }}
                onClick={() => handlerDelete(val.id)}
              >
                <Delete />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default BookList;
