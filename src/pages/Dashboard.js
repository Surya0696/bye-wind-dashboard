import React from "react";
import { Box, Grid, Typography, Paper, Card, CardContent } from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from "@mui/icons-material";
import MetricCard from "../components/Dashboard/MetricCard";
import ProjectionsChart from "../components/Dashboard/ProjectionsChart";
import RevenueChart from "../components/Dashboard/RevenueChart";
import RevenueByLocation from "../components/Dashboard/RevenueByLocation";
import TopSellingProducts from "../components/Dashboard/TopSellingProducts";
import TotalSalesChart from "../components/Dashboard/TotalSalesChart";
import NotificationsPanel from "../components/Dashboard/NotificationsPanel";
import { useTheme } from "../contexts/ThemeContext";

const Dashboard = () => {
  const { isDarkMode } = useTheme();
  const metrics = [
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      trend: "up",
      color: "#4caf50",
      backgroundColor: "#E3F5FF",
    },
    {
      title: "Orders",
      value: "1,219",
      change: "-0.03%",
      trend: "down",
      color: "#f44336",
      backgroundColor: "#f1f3f5ab",
    },
    {
      title: "Revenue",
      value: "$695",
      change: "+15.03%",
      trend: "up",
      color: "#4caf50",
      backgroundColor: "#f1f3f5ab",
    },
    {
      title: "Growth",
      value: "30.1%",
      change: "+6.08%",
      trend: "up",
      color: "#4caf50",
      backgroundColor: "#E5ECF6",
    },
  ];

  return (
    <Box sx={{ display: "flex", gap: 2, minHeight: "calc(100vh - 120px)" }}>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: 600,
            color: isDarkMode ? "#ffffff" : "#1C1C1C",
            fontSize: "16px",
          }}
        >
          eCommerce
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {metrics.map((metric, index) => (
                <Grid item xs={6} key={index}>
                  <MetricCard {...metric} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 0,
                borderRadius: 3,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                backgroundColor: isDarkMode ? "#1e1e1e" : "#F7F9FB",
                height: "100%",
                minHeight: 300,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  marginLeft: "9px",
                  fontWeight: 600,
                  fontSize: "18px",
                  color: isDarkMode ? "#ffffff" : "#1C1C1C",
                  padding: "4px",
                }}
              >
                Projections vs Actuals
              </Typography>
              <ProjectionsChart />
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: isDarkMode ? "#1e1e1e" : "#F7F9FB",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    fontSize: "16px",
                    color: isDarkMode ? "#ffffff" : "#333333",
                  }}
                >
                  Revenue
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    color: isDarkMode ? "#b0b0b0" : "#666",
                    fontSize: "14px",
                  }}
                >
                  • Current Week $58,211 • Previous Week $68,768
                </Typography>
              </Box>
              <RevenueChart />
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                padding: "11px !important",
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: isDarkMode ? "#1e1e1e" : "#F7F9FB",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: "16px",
                  color: isDarkMode ? "#ffffff" : "#333333",
                }}
              >
                Revenue by Location
              </Typography>
              <RevenueByLocation />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={9}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: isDarkMode ? "#1e1e1e" : "#F7F9FB",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: "16px",
                  color: isDarkMode ? "#ffffff" : "#333333",
                }}
              >
                Top Selling Products
              </Typography>
              <TopSellingProducts />
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                padding: "11px !important",
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: isDarkMode ? "#1e1e1e" : "#F7F9FB",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: "16px",
                  color: isDarkMode ? "#ffffff" : "#333333",
                }}
              >
                Total Sales
              </Typography>
              <TotalSalesChart />
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: 300, flexShrink: 0 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <NotificationsPanel />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
