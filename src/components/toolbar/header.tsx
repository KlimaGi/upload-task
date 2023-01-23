import * as React from 'react';
import { AppBar, Box, IconButton, Typography, Menu, Container, Avatar, Badge, Tooltip, MenuItem, Toolbar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTheme } from '@mui/material/styles';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const theme = useTheme();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar elevation={0} position="static" style={{ background: theme.palette.primary.light }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{ justifyContent: 'flex-end' }}>

          <IconButton size="small" style={{ color: theme.palette.primary.main }}>
            <Typography variant="h6" sx={{ fontWeight: 600, }} >
              EN
            </Typography>
          </IconButton>

          <IconButton
            size="small"
            aria-label="show 1 new notifications"
            color='primary'
          >
            <Badge badgeContent={1} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Box sx={{ flexGrow: 0, mx: 2 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>


  );
}
export default Header;