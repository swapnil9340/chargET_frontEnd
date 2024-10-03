import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingButton({ loading, children, ...props }) {
  return (
    <Button {...props} disabled={loading} variant="outlined">
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </Button>
  );
}

export default LoadingButton;
