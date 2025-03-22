import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React from "react";

function BookSearch() {
  const textsize = { width: { xs: "80%", md: "25%" } };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        height: "fit-content",
        width: { sx: "30rem", md: "60rem" },
        p: "1rem",
        flexDirection: { xs: "column", md: "row" },
        border: "0.1rem solid",
        borderColor: "grey.500",
        borderRadius: "0.5rem",
      }}
    >
      <TextField variant="standard" label="Filter by author" sx={textsize} />
      <TextField variant="standard" label="Filter by title" sx={textsize} />
      <FormControlLabel control={<Checkbox />} label="Only favourite" />
      <Button variant="contained">Reset filters</Button>
    </Box>
  );
}

export default BookSearch;
