import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilters,
  setOnlyFavorite,
  setSearchByAuthor,
  setSearchByTitle,
} from "../redux/slices/filterSlice";

function BookSearch() {
  const dispatch = useDispatch();
  const searchbyauthor = useSelector((state) => state.filter.searchbyauthor);
  const searchbytitle = useSelector((state) => state.filter.searchbytitle);
  const onlyfavorite = useSelector((state) => state.filter.onlyfavorite);
  const textsize = { width: { xs: "80%", md: "25%" } };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        height: "fit-content",
        width: { xs: "100%", md: "60rem" },
        p: "1rem",
        flexDirection: { xs: "column", md: "row" },
        border: "0.1rem solid",
        borderColor: "grey.500",
        borderRadius: "0.5rem",
      }}
    >
      <TextField
        variant="standard"
        label="Filter by author"
        sx={textsize}
        value={searchbyauthor}
        onChange={(e) => dispatch(setSearchByAuthor(e.target.value))}
      />
      <TextField
        variant="standard"
        label="Filter by title"
        sx={textsize}
        value={searchbytitle}
        onChange={(e) => dispatch(setSearchByTitle(e.target.value))}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={onlyfavorite}
            onChange={(e) => dispatch(setOnlyFavorite(e.target.checked))}
          />
        }
        label="Only favourite"
      />
      <Button variant="contained" onClick={() => dispatch(resetFilters())}>
        Reset filters
      </Button>
    </Box>
  );
}

export default BookSearch;
