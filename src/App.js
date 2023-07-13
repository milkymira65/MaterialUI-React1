import Rightbar from "./component/Rightbar";
import Feed from "./component/Feed";
import Sidebar from "./component/Sidebar";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      {/* Navber */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}
export default App;
