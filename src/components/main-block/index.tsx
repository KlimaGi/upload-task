import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function MainBlock() {
  const theme = useTheme();
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1 }}
      height="95vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Paper
        elevation={3}
        sx={{
          marginTop: "5.5rem",
          padding: "1rem",
          background: 'primary.light',
          borderRadius: '34px',
          height: '90%',
          width: '95%'
        }}
      >

        <Box sx={{ display: 'flex' }}>

          {/* 1st block */}

          <Box sx={{ m: '3px' }}>
            <Box sx={{ border: '1px solid grey', borderRadius: '4px', p: '5px 8px', m: '4px 0' }}>
              <Typography variant='body2'>Type of Documents</Typography>
            </Box>
            <Box sx={{ border: '1px solid grey', borderRadius: '4px', p: '5px 8px', m: '4px 0' }}>
              <Typography variant='body2'>List of uploads</Typography>
            </Box>
          </Box>

          {/* 2nd block */}


        </Box>




      </Paper>
    </Box>
  )
}

// pritaikyti plain css - ten kur corner case reikalingi mui, islaikyti paprastuma ir aiskuma projekto
// drag and drop logika
// upload files
// saugojimas su redux
// api call for person icon