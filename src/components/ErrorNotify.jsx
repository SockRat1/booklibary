import { IconButton, Snackbar, SnackbarContent } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetError } from "../redux/slices/errorSlice";
import { Close } from "@mui/icons-material";

function ErrorNotify() {
  const text = useSelector((state) => state.error);
  const dispatch = useDispatch();

  function handleClose(e, reason) {
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
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={text}
        autoHideDuration={4000}
        onClose={handleClose}
      >
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
