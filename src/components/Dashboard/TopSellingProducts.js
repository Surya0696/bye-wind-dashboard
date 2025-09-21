import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

const TopSellingProducts = () => {
  const { isDarkMode } = useTheme();
  const products = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
  ];

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600, color: isDarkMode ? '#b0b0b0' : '#666', borderBottom: isDarkMode ? '1px solid #333333' : '1px solid #e0e0e0' }}>
              Name
            </TableCell>
            <TableCell sx={{ fontWeight: 600, color: isDarkMode ? '#b0b0b0' : '#666', borderBottom: isDarkMode ? '1px solid #333333' : '1px solid #e0e0e0' }}>
              Price
            </TableCell>
            <TableCell sx={{ fontWeight: 600, color: isDarkMode ? '#b0b0b0' : '#666', borderBottom: isDarkMode ? '1px solid #333333' : '1px solid #e0e0e0' }}>
              Quantity
            </TableCell>
            <TableCell sx={{ fontWeight: 600, color: isDarkMode ? '#b0b0b0' : '#666', borderBottom: isDarkMode ? '1px solid #333333' : '1px solid #e0e0e0' }}>
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index} sx={{ '&:hover': { backgroundColor: isDarkMode ? '#333333' : '#f5f5f5' } }}>
              <TableCell sx={{ borderBottom: isDarkMode ? '1px solid #333333' : '1px solid #f0f0f0' }}>
                <Typography variant="body2" sx={{ color: isDarkMode ? '#ffffff' : '#333' }}>
                  {product.name}
                </Typography>
              </TableCell>
              <TableCell sx={{ borderBottom: isDarkMode ? '1px solid #333333' : '1px solid #f0f0f0' }}>
                <Typography variant="body2" sx={{ color: isDarkMode ? '#ffffff' : '#333' }}>
                  {product.price}
                </Typography>
              </TableCell>
              <TableCell sx={{ borderBottom: isDarkMode ? '1px solid #333333' : '1px solid #f0f0f0' }}>
                <Typography variant="body2" sx={{ color: isDarkMode ? '#ffffff' : '#333' }}>
                  {product.quantity}
                </Typography>
              </TableCell>
              <TableCell sx={{ borderBottom: isDarkMode ? '1px solid #333333' : '1px solid #f0f0f0' }}>
                <Typography variant="body2" sx={{ color: isDarkMode ? '#ffffff' : '#333', fontWeight: 500 }}>
                  {product.amount}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopSellingProducts;
