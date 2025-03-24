import { Bookmark, BookmarkBorder, Delete, Favorite } from "@mui/icons-material";
import { Box, Checkbox, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, toggleFavorite, TypeBook } from "../redux/slices/booksSlice";
import { AppDispatch, RootState } from "../redux/store";
import { ChangeEvent } from "react";

function BookList() {
  const books = useSelector((state: RootState) => state.books.books);
  const dispatch: AppDispatch = useDispatch();
  const searchbyauthor = useSelector((state: RootState) => state.filter.searchbyauthor);
  const searchbytitle = useSelector((state: RootState) => state.filter.searchbytitle);
  const onlyfavorite = useSelector((state: RootState) => state.filter.onlyfavorite);
  let searchedbooks: TypeBook[] = [...books];

  if (searchbyauthor) {
    searchedbooks = searchedbooks.filter((book) => book.author.toLowerCase().includes(searchbyauthor.toLowerCase()));
  }

  if (searchbytitle) {
    searchedbooks = searchedbooks.filter((book) => book.title.toLowerCase().includes(searchbytitle.toLowerCase()));
  }
  if (onlyfavorite) {
    searchedbooks = searchedbooks.filter((book) => book.isFavorite);
  }

  function handlerDelete(id: string): void {
    dispatch(deleteBook(id));
  }
  function handleFavorite(e: ChangeEvent<HTMLInputElement>, id: string): void {
    dispatch(toggleFavorite(id));
  }
  return (
    <Box
      sx={{
        py: "2rem",
        minWidth: { xs: "100%", md: "60rem" },
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
        {searchedbooks.map((val, index) => {
          if (val) {
            return (
              <ListItem
                key={val.id}
                sx={{
                  width: "100%",
                  backgroundColor: index % 2 != 0 ? "grey.100" : undefined,
                  borderBottom: "0.1rem solid",
                  borderBottomColor: "grey.500",
                  px: 2,
                }}
              >
                <ListItemText primary={val.title} secondary={val.author} />
                <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} checked={val.isFavorite} onChange={(e) => handleFavorite(e, val.id)} />
                <IconButton sx={{ ml: "auto" }} onClick={() => handlerDelete(val.id)}>
                  <Delete />
                </IconButton>
              </ListItem>
            );
          }
          return;
        })}
      </List>
    </Box>
  );
}

export default BookList;
