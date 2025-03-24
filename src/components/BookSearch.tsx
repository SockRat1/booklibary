import { Box, Button, Checkbox, FormControlLabel, SxProps, TextField } from "@mui/material";
import React, { ChangeEvent, CSSProperties } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters, setOnlyFavorite, setSearchByAuthor, setSearchByTitle } from "../redux/slices/filterSlice";
import { AppDispatch, RootState } from "../redux/store";

function BookSearch() {
  const dispatch: AppDispatch = useDispatch();
  const searchbyauthor = useSelector((state: RootState) => state.filter.searchbyauthor);
  const searchbytitle = useSelector((state: RootState) => state.filter.searchbytitle);
  const onlyfavorite = useSelector((state: RootState) => state.filter.onlyfavorite);
  const textsize: SxProps = { width: { xs: "80%", md: "25%" } };
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
        control={<Checkbox checked={onlyfavorite} onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setOnlyFavorite(e.target.checked))} />}
        label="Only favourite"
      />
      <Button variant="contained" onClick={() => dispatch(resetFilters())}>
        Reset filters
      </Button>
    </Box>
  );
}

export default BookSearch;
