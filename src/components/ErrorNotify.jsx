import { IconButton, Snackbar, SnackbarContent } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../redux/slices/errorSlice";
import { Close } from "@mui/icons-material";

function ErrorNotify() {
  const open = useSelector((state) => state.error.isOpen);
  const text = useSelector((state) => state.error.text);
  const dispatch = useDispatch();

  function handleClose(e, reason) {
    if (reason === "clickaway") return;

    dispatch(toggleOpen());
  }
  const action = (
    <>
      <IconButton onClick={() => dispatch(toggleOpen())}>
        <Close sx={{ color: "white" }} />
      </IconButton>
    </>
  );
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
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
