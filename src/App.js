import Rightbar from "./component/Rightbar";
import Feed from "./component/Feed";
import Sidebar from "./component/Sidebar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./component/Navbar";
import Add from "./component/Add";
import { useState } from "react";
import { theme } from "./App";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add darkTheme={darkTheme} mode={mode} />
      </Box>
    </ThemeProvider>
  );
}
export default App;
