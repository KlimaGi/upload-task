import React from 'react';
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/custom-theme';
import Toolbar from './components/toolbar';

function App() {

  return (
    <Box sx={{ background: 'linear-gradient(to right bottom, #fcf6fc, #d8aad5)', height: '100vh', width: '100vw' }}>
      <ThemeProvider theme={theme} >
        <CssBaseline />

        <Toolbar />

      </ThemeProvider>
    </Box>
  );
}

export default App;
