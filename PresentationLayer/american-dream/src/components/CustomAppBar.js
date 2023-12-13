import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CustomAppBar({ pageName }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
        //axios.get('http://localhost:8080/logout');
        navigate('/login'); // Redirect to the login page
    } catch (error) {
        console.error('Logout error:', error);
    }
};
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pageName}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}