import Rightbar from "./component/Rightbar";
import Feed from "./component/Feed";
import Sidebar from "./component/Sidebar";
import { Box, Stack } from "@mui/material";
import Navbar from "./component/Navbar";
import { Add } from "@mui/icons-material";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
}
export default App;
