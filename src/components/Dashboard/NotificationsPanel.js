import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Box,
  Divider,
} from "@mui/material";
import {
  BugReport as BugIcon,
  PersonAdd as PersonAddIcon,
  Wifi as WifiIcon,
  CheckCircle as CheckIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { useTheme } from "../../contexts/ThemeContext";

const NotificationsPanel = () => {
  const { isDarkMode } = useTheme();
  const notifications = [
    {
      text: "You have a bug that needs to be fixed",
      icon: <BugIcon sx={{ color: "#f44336" }} />,
      time: "Just now",
    },
    {
      text: "New user registered",
      icon: <PersonAddIcon sx={{ color: "#4caf50" }} />,
      time: "59 minutes ago",
    },
    {
      text: "You have a bug that needs to be fixed",
      icon: <BugIcon sx={{ color: "#f44336" }} />,
      time: "12 hours ago",
    },
    {
      text: "Andi Lane subscribed to you",
      icon: <WifiIcon sx={{ color: "#2196f3" }} />,
      time: "Today, 11:59 AM",
    },
  ];

  const activities = [
    {
      text: "You have a bug that needs to be fixed",
      avatar: (
        <Avatar sx={{ bgcolor: "#4caf50", width: 24, height: 24 }}>Y</Avatar>
      ),
      time: "Just now",
    },
    {
      text: "Released a new version",
      avatar: (
        <Avatar sx={{ bgcolor: "#f44336", width: 24, height: 24 }}>R</Avatar>
      ),
      time: "59 minutes ago",
    },
    {
      text: "Submitted a bug",
      avatar: (
        <Avatar sx={{ bgcolor: "#2196f3", width: 24, height: 24 }}>S</Avatar>
      ),
      time: "12 hours ago",
    },
    {
      text: "Modified A data in Page X",
      avatar: (
        <Avatar sx={{ bgcolor: "#ff9800", width: 24, height: 24 }}>M</Avatar>
      ),
      time: "Today, 11:59 AM",
    },
    {
      text: "Deleted a page in Project X",
      avatar: (
        <Avatar sx={{ bgcolor: "#9e9e9e", width: 24, height: 24 }}>D</Avatar>
      ),
      time: "Feb 2, 2023",
    },
  ];

  const contacts = [
    "Natali Craig",
    "Drew Cano",
    "Orlando Diggs",
    "Andi Lane",
    "Kate Morrison",
    "Koray Okumus",
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Paper
        sx={{
          p: 2.5,
          borderRadius: "8px",
        backgroundColor: isDarkMode ? "#1e1e1e" : "transparent",
        boxShadow: "none",
        border: isDarkMode ? "1px solid #333333" : "1px solid #1C1C1C1A",
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600, fontSize: "14px", color: isDarkMode ? "#ffffff" : "#1C1C1C" }}
        >
          Notifications
        </Typography>
        <List dense>
          {notifications.map((notification, index) => (
            <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 28 }}>
                {notification.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    sx={{ color: isDarkMode ? "#ffffff" : "#333", fontSize: "13px", lineHeight: 1.4 }}
                  >
                    {notification.text}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="caption"
                    sx={{ color: "#999", fontSize: "11px" }}
                  >
                    {notification.time}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600, fontSize: "14px", color: isDarkMode ? "#ffffff" : "#1C1C1C" }}
        >
          Activities
        </Typography>
        <List dense>
          {activities.map((activity, index) => (
            <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 28 }}>
                {activity.avatar}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    sx={{ color: isDarkMode ? "#ffffff" : "#333", fontSize: "13px", lineHeight: 1.4 }}
                  >
                    {activity.text}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="caption"
                    sx={{ color: "#999", fontSize: "11px" }}
                  >
                    {activity.time}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600, fontSize: "14px", color: isDarkMode ? "#ffffff" : "#1C1C1C" }}
        >
          Contacts
        </Typography>
        <List dense>
          {contacts.map((contact, index) => (
            <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <Avatar
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: "#1976d2",
                    fontSize: "12px",
                  }}
                >
                  {contact
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    sx={{ color: isDarkMode ? "#ffffff" : "#333", fontSize: "13px", lineHeight: 1.4 }}
                  >
                    {contact}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default NotificationsPanel;
