import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { LocationOn as LocationIcon } from '@mui/icons-material';

const RevenueByLocation = () => {
  const locations = [
    { name: 'New York', revenue: '72K' },
    { name: 'San Francisco', revenue: '39K' },
    { name: 'Sydney', revenue: '25K' },
    { name: 'Singapore', revenue: '61K' },
  ];

  return (
    <Box>
      {/* Simple world map representation */}
      <Box sx={{ 
        height: 200, 
        background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
        borderRadius: 2,
        position: 'relative',
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography variant="body2" sx={{ color: '#666' }}>
          World Map Visualization
        </Typography>
        {/* Dots representing locations */}
        {locations.map((location, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#1976d2',
              top: `${20 + index * 20}%`,
              left: `${30 + index * 15}%`,
              '&::after': {
                content: '""',
                position: 'absolute',
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: 'rgba(25, 118, 210, 0.3)',
                top: -4,
                left: -4,
                animation: 'pulse 2s infinite',
              }
            }}
          />
        ))}
      </Box>

      {/* Location list */}
      <List dense>
        {locations.map((location, index) => (
          <ListItem key={index} sx={{ px: 0 }}>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationIcon sx={{ fontSize: 16, color: '#666' }} />
                    <Typography variant="body2" sx={{ color: '#333' }}>
                      {location.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#333' }}>
                    {location.revenue}
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </Box>
  );
};

export default RevenueByLocation;
