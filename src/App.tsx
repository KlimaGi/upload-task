import React from 'react';
import { Box, CssBaseline, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles/main-styles.css';
import { height } from '@mui/system';


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#62727f', // grey tekstui
        light: '#ffffff', //white
        dark: '#212b35', // pilkai juoda
        contrastText: '#91128b', // purple -  main contrast
      },
      secondary: {
        main: '#b1b5b8', // lighter grey fonui
        light: '#fcf6fc', // light purple
        dark: '#d8aad5', // sviesi purple fonui
        contrastText: '#0fab5b', // green
      },
    },
  });
  // background="linear-gradient(to right bottom, #fcf6fc, #d8aad5)"

  return (
    <div className='container'>

      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Box
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"

        >
          <Paper
            elevation={3}
            sx={{ padding: "1rem", background: 'primary.light', borderRadius: '34px', height: '90%', width: '80%' }}
          >

          </Paper>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
