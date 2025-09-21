import React, { useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  WbSunny as SunIcon,
  History as HistoryIcon,
  Notifications as NotificationsIcon,
  Apps as AppsIcon,
} from "@mui/icons-material";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useTheme as useCustomTheme } from "../../contexts/ThemeContext";

const drawerWidth = 280;

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isDarkMode } = useCustomTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: isDarkMode ? "#121212" : "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            backgroundColor: isDarkMode ? "#1e1e1e" : "white",
            borderBottom: `1px solid ${isDarkMode ? "#333333" : "#e0e0e0"}`,
            py: 2,
          }}
        >
          <Header />
        </Box>

        <Box sx={{ p: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
