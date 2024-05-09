import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Title from './Title';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export default function DenseAppBar() {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100 
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: scrolled ? '#db9243' : 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: "Center" }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <Box sx={{ display: 'flex' }}>
            <Title title='Home'></Title>
            <Title title='About'></Title>
            <Title title='Service'></Title>
            <Title title='Contact'></Title>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
