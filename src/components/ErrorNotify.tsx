import { IconButton, Snackbar, SnackbarCloseReason, SnackbarContent } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetError } from "../redux/slices/errorSlice";
import { Close } from "@mui/icons-material";
import { AppDispatch, RootState } from "../redux/store";

function ErrorNotify() {
  const text = useSelector((state: RootState) => state.error);
  const dispatch: AppDispatch = useDispatch();
  const parseBoolean = (value: string): boolean => value.trim() !== "";

  function handleClose(_: unknown, reason: SnackbarCloseReason) {
    if (reason === "clickaway") return;

    dispatch(resetError());
  }
  const action = (
    <>
      <IconButton onClick={() => dispatch(resetError())}>
        <Close sx={{ color: "white" }} />
      </IconButton>
    </>
  );
  return (
    <>
      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={parseBoolean(text)} autoHideDuration={4000} onClose={handleClose}>
        <SnackbarContent
          action={action}
          message={text}
          sx={{
            backgroundColor: "#FF474C",
          }}
        />
      </Snackbar>
    </>
  );
}

export default ErrorNotify;
