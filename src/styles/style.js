// src/theme.js
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6', // Primary color
    },
    secondary: {
      main: '#19857b', // Secondary color
    },
    error: {
      main: '#ff0000', // Error color
    },
    background: {
      default: '#fff', // Background color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          width: '100%',
          height: '48px',
          padding: '8px',
          border: '1px solid #cddef7',
          borderRadius: '8px',
          backgroundColor: 'transparent',
          color: '#72a3e8',
          fontSize: '16px',
          fontFamily: '"Work Sans", sans-serif',
          fontWeight: 600,
          textAlign: 'center',
          lineHeight: '24px',
          outline: 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: '#fff',
          },
        },
      },
    },
  },
});

export default theme;
