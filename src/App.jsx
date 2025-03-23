import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import BookForm from "./components/BookForm";
import BookSearch from "./components/BookSearch";
import BookList from "./components/BookList";
import { Box, Stack } from "@mui/material";
import ErrorNotify from "./components/ErrorNotify";
function App() {
  return (
    <>
      <ErrorNotify />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "2rem",
            alignItems: "stretch  ",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <BookForm />
          <Stack spacing="2rem">
            <BookSearch />
            <BookList />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default App;
