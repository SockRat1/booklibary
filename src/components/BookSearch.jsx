import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React from "react";

function BookSearch() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        height: "5rem",
        width: "60rem",
        p: "1rem",

        border: "0.1rem solid",
        borderColor: "grey.500",
        borderRadius: "0.5rem",
      }}
    >
      <TextField variant="standard" label="Filter by author" />
      <TextField variant="standard" label="Filter by title" />
      <FormControlLabel control={<Checkbox />} label="Only favourite" />
      <Button variant="contained">Reset filters</Button>
    </Box>
  );
}

export default BookSearch;
