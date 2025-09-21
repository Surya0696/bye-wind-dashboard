import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  Avatar,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  Folder as FolderIcon,
  Book as BookIcon,
  Person as PersonIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  FiberManualRecord as DotIcon,
  Group as GroupIcon,
  Article as ArticleIcon,
  Chat as ChatIcon,
  Receipt as ReceiptIcon,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openPages, setOpenPages] = useState(false);
  const { isDarkMode } = useTheme();

  const handlePagesClick = () => {
    setOpenPages(!openPages);
  };

  const menuItems = [
    {
      title: "Favorites",
      items: [
        {
          text: "Overview",
          icon: <DotIcon sx={{ fontSize: 8, color: "#666" }} />,
          path: "/dashboard",
        },
        {
          text: "Projects",
          icon: <DotIcon sx={{ fontSize: 8, color: "#666" }} />,
          path: "/projects",
        },
      ],
    },
    {
      title: "Dashboards",
      items: [
        {
          text: "Default",
          icon: <DashboardIcon />,
          path: "/dashboard",
          active: true,
        },
        { text: "eCommerce", icon: <ShoppingCartIcon />, path: "/dashboard" },
        { text: "Order List", icon: <ReceiptIcon />, path: "/orders" },
        { text: "Projects", icon: <FolderIcon />, path: "/projects" },
        { text: "Online Courses", icon: <BookIcon />, path: "/courses" },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          text: "User Profile",
          icon: <PersonIcon />,
          path: "/profile",
          hasSubmenu: true,
        },
        { text: "Account", icon: <PersonIcon />, path: "/account" },
        { text: "Corporate", icon: <GroupIcon />, path: "/corporate" },
        { text: "Blog", icon: <ArticleIcon />, path: "/blog" },
        { text: "Social", icon: <ChatIcon />, path: "/social" },
      ],
    },
  ];

  const userProfileItems = [
    { text: "Overview", path: "/profile/overview" },
    { text: "Projects", path: "/profile/projects" },
    { text: "Campaigns", path: "/profile/campaigns" },
    { text: "Documents", path: "/profile/documents" },
    { text: "Followers", path: "/profile/followers" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: isDarkMode ? "#1e1e1e" : "white",
        borderRight: `1px solid ${isDarkMode ? "#333333" : "#e0e0e0"}`,
      }}
    >
      <Box sx={{ p: 3, borderBottom: `1px solid ${isDarkMode ? "#333333" : "#e0e0e0"}` }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="h6"
            sx={{ 
              fontWeight: 600, 
              color: isDarkMode ? "#ffffff" : "#1C1C1C", 
              fontSize: "14px" 
            }}
          >
            ByeWind
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        {menuItems.map((section, sectionIndex) => (
          <Box key={sectionIndex} sx={{ mb: 3 }}>
            <Typography
              variant="caption"
              sx={{
                color: isDarkMode ? "#b0b0b0" : "#666",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1,
                mb: 1,
                display: "block",
              }}
            >
              {section.title}
            </Typography>
            <List dense>
              {section.items.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (item.text === "User Profile") {
                          handlePagesClick();
                        } else {
                          handleNavigation(item.path);
                        }
                      }}
                      sx={{
                        borderRadius: 1,
                        mb: 0.5,
                        backgroundColor:
                          item.active && location.pathname === item.path
                            ? isDarkMode ? "#333333" : "#f5f5f5"
                            : "transparent",
                        borderLeft:
                          item.active && location.pathname === item.path
                            ? "3px solid #1976d2"
                            : "3px solid transparent",
                        "&:hover": {
                          backgroundColor: isDarkMode ? "#333333" : "#f5f5f5",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 36,
                          color:
                            item.active && location.pathname === item.path
                              ? "#1976d2"
                              : isDarkMode ? "#b0b0b0" : "#666",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: "14px",
                          color:
                            item.active && location.pathname === item.path
                              ? "#1976d2"
                              : isDarkMode ? "#ffffff" : "#333",
                          fontWeight:
                            item.active && location.pathname === item.path
                              ? 600
                              : 400,
                        }}
                      />
                      {item.text === "User Profile" &&
                        (openPages ? (
                          <ExpandLessIcon sx={{ fontSize: 16 }} />
                        ) : (
                          <ExpandMoreIcon sx={{ fontSize: 16 }} />
                        ))}
                    </ListItemButton>
                  </ListItem>

                  {item.text === "User Profile" && (
                    <Collapse in={openPages} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {userProfileItems.map((subItem, subIndex) => (
                          <ListItem key={subIndex} disablePadding>
                            <ListItemButton
                              onClick={() => handleNavigation(subItem.path)}
                              sx={{ pl: 4, borderRadius: 1, mb: 0.5 }}
                            >
                              <ListItemText
                                primary={subItem.text}
                                primaryTypographyProps={{
                                  fontSize: "13px",
                                  color: isDarkMode ? "#b0b0b0" : "#666",
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
