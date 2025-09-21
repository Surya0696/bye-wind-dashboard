import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from "@mui/icons-material";

const MetricCard = ({ title, value, change, trend, color, backgroundColor }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        backgroundColor: backgroundColor || "#F9FAFB",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        p: 2.5,
        minHeight: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* Title */}
        <Typography
          variant="body2"
          sx={{ 
            fontWeight: 500, 
            color: "#666", 
            mb: 1.5,
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          {title}
        </Typography>

        {/* Value */}
        <Typography
          variant="h4"
          sx={{ 
            fontWeight: 700, 
            color: "#1C1C1C", 
            mb: 1.5,
            fontSize: '28px',
            lineHeight: 1.2
          }}
        >
          {value}
        </Typography>

        {/* Trend */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {trend === "up" ? (
            <TrendingUpIcon sx={{ fontSize: 16, color: color }} />
          ) : (
            <TrendingDownIcon sx={{ fontSize: 16, color: color }} />
          )}
          <Typography
            variant="body2"
            sx={{ 
              fontWeight: 600, 
              color: color,
              fontSize: '14px'
            }}
          >
            {change}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
