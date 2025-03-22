import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/actionCreators";
import { v4 } from "uuid";

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  function addHandler() {
    if (title && author) {
      const book = {
        title,
        author,
        id: v4(),
      };
      dispatch(addBook(book));
      setTitle("");
      setAuthor("");
    }
  }

  return (
    <>
      <Box
        sx={{
          width: "30rem",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: "2rem",
          p: "3rem",
          border: "0.1rem solid",
          borderColor: "grey.500",
          borderRadius: "0.5rem",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">Add a new book</Typography>
        <TextField
          variant="standard"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Box display="flex" flexDirection="column" gap="1rem" width="100%">
          <Button variant="contained" fullWidth onClick={addHandler}>
            Add Book
          </Button>
          <Button variant="contained">Add random via API</Button>
        </Box>
      </Box>
    </>
  );
}

export default BookForm;
