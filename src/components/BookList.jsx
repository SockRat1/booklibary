import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <Box
      sx={{
        py: "2rem",
        width: "60rem",
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
      <List>
        {books.map((val, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                backgroundColor: index % 2 != 0 ? "grey.100" : null,
                borderBottom: "0.1rem solid",
                borderBottomColor: "grey.500",
                px: 2,
              }}
            >
              <ListItemText primary={val.title} secondary={val.author} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default BookList;
