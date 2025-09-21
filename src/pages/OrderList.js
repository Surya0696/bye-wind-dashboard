import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Avatar,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Pagination,
  Stack,
} from "@mui/material";
import {
  Add as AddIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  Search as SearchIcon,
  MoreVert as MoreVertIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";

const OrderList = () => {
  const { isDarkMode } = useTheme();
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    {
      id: "CM9801",
      user: { name: "Natali Craig", avatar: "N" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: { label: "In Progress", color: "#9c27b0" },
    },
    {
      id: "CM9802",
      user: { name: "Kate Morrison", avatar: "K" },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: { label: "Complete", color: "#4caf50" },
    },
    {
      id: "CM9803",
      user: { name: "Drew Cano", avatar: "D" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: { label: "Pending", color: "#2196f3" },
    },
    {
      id: "CM9804",
      user: { name: "Orlando Diggs", avatar: "O" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: { label: "Approved", color: "#ff9800" },
    },
    {
      id: "CM9805",
      user: { name: "Andi Lane", avatar: "A" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: { label: "Rejected", color: "#f44336" },
    },
    {
      id: "CM9806",
      user: { name: "Natali Craig", avatar: "N" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: { label: "In Progress", color: "#9c27b0" },
    },
    {
      id: "CM9807",
      user: { name: "Kate Morrison", avatar: "K" },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: { label: "Complete", color: "#4caf50" },
    },
    {
      id: "CM9808",
      user: { name: "Drew Cano", avatar: "D" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: { label: "Pending", color: "#2196f3" },
    },
    {
      id: "CM9809",
      user: { name: "Orlando Diggs", avatar: "O" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: { label: "Approved", color: "#ff9800" },
    },
    {
      id: "CM9810",
      user: { name: "Andi Lane", avatar: "A" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: { label: "Rejected", color: "#f44336" },
    },
  ];

  const handleSelectOrder = (orderId) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map((order) => order.id));
    }
  };

  const getStatusChip = (status) => (
    <Chip
      label={status.label}
      size="small"
      sx={{
        backgroundColor: `${status.color}20`,
        color: status.color,
        fontWeight: 500,
        "& .MuiChip-label": {
          fontSize: "12px",
        },
      }}
    />
  );

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: 600, color: isDarkMode ? "#ffffff" : "#333" }}
      >
        Order List
      </Typography>

      <Paper
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 2,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton sx={{ color: "#1976d2" }}>
              <AddIcon />
            </IconButton>
            <IconButton sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}>
              <FilterIcon />
            </IconButton>
            <IconButton sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}>
              <SortIcon />
            </IconButton>
          </Box>

          <TextField
            placeholder="Q Search"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              width: 200,
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
      </Paper>

      <Paper
        sx={{
          borderRadius: 2,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow
                sx={{ backgroundColor: isDarkMode ? "#333333" : "#f8f9fa" }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedOrders.length === orders.length}
                    indeterminate={
                      selectedOrders.length > 0 &&
                      selectedOrders.length < orders.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    color: isDarkMode ? "#b0b0b0" : "#666",
                  }}
                >
                  Order ID
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    color: isDarkMode ? "#b0b0b0" : "#666",
                  }}
                >
                  User
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    color: isDarkMode ? "#b0b0b0" : "#666",
                  }}
                >
                  Project
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    color: isDarkMode ? "#b0b0b0" : "#666",
                  }}
                >
                  Address
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    color: isDarkMode ? "#b0b0b0" : "#666",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    color: isDarkMode ? "#b0b0b0" : "#666",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    color: isDarkMode ? "#b0b0b0" : "#666",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.id}
                  hover
                  sx={{
                    "&:hover": {
                      backgroundColor: isDarkMode ? "#333333" : "#f5f5f5",
                    },
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedOrders.includes(order.id)}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleSelectOrder(order.id);
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 500, color: "#1976d2" }}
                    >
                      #{order.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar
                        sx={{
                          width: 32,
                          height: 32,
                          bgcolor: "#1976d2",
                          fontSize: "14px",
                        }}
                      >
                        {order.user.avatar}
                      </Avatar>
                      <Typography
                        variant="body2"
                        sx={{ color: isDarkMode ? "#ffffff" : "#333" }}
                      >
                        {order.user.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ color: isDarkMode ? "#ffffff" : "#333" }}
                    >
                      {order.project}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <LocationIcon
                        sx={{
                          fontSize: 16,
                          color: isDarkMode ? "#b0b0b0" : "#666",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: isDarkMode ? "#ffffff" : "#333" }}
                      >
                        {order.address}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
                    >
                      {order.date}
                    </Typography>
                  </TableCell>
                  <TableCell>{getStatusChip(order.status)}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreVertIcon
                        sx={{
                          fontSize: 16,
                          color: isDarkMode ? "#b0b0b0" : "#666",
                        }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <Stack spacing={2}>
            <Pagination
              count={5}
              page={currentPage}
              onChange={(event, page) => setCurrentPage(page)}
              color="primary"
              size="small"
            />
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderList;
