import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
} from "@mui/material";
import {
  Search as SearchIcon,
  WbSunny as SunIcon,
  DarkMode as DarkModeIcon,
  Refresh as RefreshIcon,
  Notifications as NotificationsIcon,
  Folder as FolderIcon,
  Apps as AppsIcon,
} from "@mui/icons-material";
import { useTheme } from "../../contexts/ThemeContext";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        px: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography
          variant="body2"
          sx={{ color: isDarkMode ? "#b0b0b0" : "#666", ml: 2 }}
        >
          Dashboards / Default
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, maxWidth: 400, mx: 4 }}>
        <TextField
          fullWidth
          placeholder="Q Search"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Typography
                  variant="caption"
                  sx={{ color: isDarkMode ? "#666" : "#999", fontSize: "12px" }}
                >
                  H/
                </Typography>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: isDarkMode ? "#333333" : "#f5f5f5",
              borderRadius: 2,
              color: isDarkMode ? "#ffffff" : "#333333",
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1976d2",
              },
            },
          }}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton
          size="small"
          onClick={toggleTheme}
          sx={{
            color: isDarkMode ? "#ffb74d" : "#666",
            "&:hover": {
              backgroundColor: isDarkMode
                ? "rgba(255, 183, 77, 0.1)"
                : "rgba(102, 102, 102, 0.1)",
            },
          }}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <SunIcon /> : <DarkModeIcon />}
        </IconButton>
        <IconButton
          size="small"
          sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
        >
          <RefreshIcon />
        </IconButton>
        <IconButton
          size="small"
          sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
        >
          <NotificationsIcon />
        </IconButton>
        <IconButton
          size="small"
          sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
        >
          <FolderIcon />
        </IconButton>
        <IconButton
          size="small"
          sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
        >
          <AppsIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
