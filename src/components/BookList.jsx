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
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, toggleFavorite } from "../redux/slices/booksSlice";

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const searchbyauthor = useSelector((state) => state.filter.searchbyauthor);
  const searchbytitle = useSelector((state) => state.filter.searchbytitle);
  const onlyfavorite = useSelector((state) => state.filter.onlyfavorite);
  let searchedbooks = [...books];

  if (searchbyauthor) {
    searchedbooks = searchedbooks.filter((book) =>
      book.author.toLowerCase().includes(searchbyauthor.toLowerCase())
    );
  }

  if (searchbytitle) {
    searchedbooks = searchedbooks.filter((book) =>
      book.title.toLowerCase().includes(searchbytitle.toLowerCase())
    );
  }
  if (onlyfavorite) {
    searchedbooks = searchedbooks.filter((book) => book.isFavorite);
  }

  function handlerDelete(id) {
    dispatch(deleteBook(id));
  }
  function handleFavorite(e, id) {
    dispatch(toggleFavorite(id));
  }
  return (
    <Box
      sx={{
        py: "2rem",
        width: { xs: "100%", md: "60rem" },
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
                checked={val.isFavorite}
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
