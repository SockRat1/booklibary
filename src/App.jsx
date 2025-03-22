import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import BookForm from "./components/BookForm";
import BookSearch from "./components/BookSearch";
import BookList from "./components/BookList";
import { Box, Stack } from "@mui/material";
function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "2rem",
            alignItems: "stretch  ",
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
