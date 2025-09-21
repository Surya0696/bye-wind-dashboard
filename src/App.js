import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import OrderList from './pages/OrderList';
import { ThemeProvider as CustomThemeProvider, useTheme } from './contexts/ThemeContext';

const createAppTheme = (isDarkMode) => createTheme({
  palette: {
    mode: isDarkMode ? 'dark' : 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: isDarkMode ? '#121212' : '#f8f9fa',
      paper: isDarkMode ? '#1e1e1e' : '#ffffff',
    },
    text: {
      primary: isDarkMode ? '#ffffff' : '#333333',
      secondary: isDarkMode ? '#b0b0b0' : '#666666',
    },
    divider: isDarkMode ? '#333333' : '#e0e0e0',
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
          border: isDarkMode ? '1px solid #333333' : '1px solid #e0e0e0',
        },
      },
    },
  },
});

function AppContent() {
  const { isDarkMode } = useTheme();
  const theme = createAppTheme(isDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<OrderList />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;
