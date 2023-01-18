import React from 'react';
import { Box, Paper } from '@mui/material';

export default function MainBlock() {
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
      </Paper>
    </Box>
  )
}

