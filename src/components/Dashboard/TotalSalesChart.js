import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../../contexts/ThemeContext";

const TotalSalesChart = () => {
  const { isDarkMode } = useTheme();
  const data = [
    { name: "Direct", value: 300.56, color: "#000000" },
    { name: "Affiliate", value: 135.18, color: "#4caf50" },
    { name: "Sponsored", value: 154.02, color: "#9c27b0" },
    { name: "E-mail", value: 48.96, color: "#90caf9" },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const percentage = ((data[0].value / total) * 100).toFixed(1);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ position: "relative", width: "100%", height: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: isDarkMode ? "#ffffff" : "#333" }}
          >
            {percentage}%
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 2, width: "100%" }}>
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: item.color,
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: isDarkMode ? "#b0b0b0" : "#666" }}
              >
                {item.name}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, color: isDarkMode ? "#ffffff" : "#333" }}
            >
              ${item.value.toFixed(2)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TotalSalesChart;
