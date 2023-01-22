import React, { useState } from 'react';
import { Box, AppBar, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Header from './header';
import { MainBlock } from '../main-block';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const theme = useTheme();
  const [value, setValue] = useState('one');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Header />

      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: '0 1px 20px 5px #d7d9db'
          },
        }}
        variant="permanent"
        anchor="left"
      >

        <Box sx={{ width: '100%', marginTop: '4rem' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            orientation="vertical"
            sx={{
              '.MuiTabs-indicator': {
                left: 0,
                border: '5px solid #91128b',
                borderRadius: '5px',
                maxHeight: '20px',
                margin: '12px -4px'
              },
              '.Mui-selected': {
                color: theme.palette.primary.contrastText,
                background: theme.palette.secondary.dark
              },
              ".MuiButtonBase-root": {
                textTransform: "none",
                minHeight: '42px',
                lineHeight: '1',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '10px',
              },
              '.MuiTab-iconWrapper': {
                marginRight: '24px',
                marginLeft: '14px'
              }
            }}

          >
            <Tab icon={<HomeIcon />} iconPosition="start" value="one" label="Upload" />
            <Tab icon={<InsertDriveFileIcon />} iconPosition="start" value="two" label="Documents" />

          </Tabs>

          <List sx={{ paddingTop: 0 }}>
            {['Inbox', 'Sent', 'Drafts'].map((text, index) => (
              <ListItem key={text} sx={{ margin: 0, padding: 0 }} >
                <ListItemButton sx={{ pl: 9 }}>
                  <ListItemIcon sx={{ minWidth: '25px' }}>
                    <FiberManualRecordIcon sx={{ fontSize: 'small', color: theme.palette.primary.main }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{ color: theme.palette.primary.main }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

      </Drawer >

      <MainBlock />

    </Box >
  );
}

// todo: subuildinti dizaino elementus 
// strukturos logika pritaikyti
// api uzklausa su axios
// redux pritaikyti