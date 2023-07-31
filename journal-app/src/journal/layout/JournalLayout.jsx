
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";
import { Toolbar } from "@mui/material";

// eslint-disable-next-line no-unused-vars
const drawerWidth = 240;
// eslint-disable-next-line react/prop-types
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* NAVBAR */}
      <NavBar drawerWidth={ drawerWidth } />

      {/* SIDEBAR */}
      <SideBar drawerWidth={ drawerWidth } />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* TOOLBAR */}

        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
