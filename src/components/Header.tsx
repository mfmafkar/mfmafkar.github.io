import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import afkLogo from '../assets/afk.jpg';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect small screens
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer for mobile

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        }}
      >
        {/* Logo as IconButton */}
        <IconButton
          color="inherit"
          aria-label="home"
          component={RouterLink} // Use RouterLink for navigation
          to="/" // Home route
        >
          <img
            src={afkLogo}
            alt="AFK Logo"
            style={{ width: 50, height: 50, borderRadius: '50%' }}
          />
        </IconButton>

        {/* Navigation Links for larger screens */}
        {!isMobile ? (
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Skills', 'Projects', 'Blogs', 'Work Experience'].map((text) => (
              <Link
                key={text}
                component={RouterLink} // Use RouterLink for navigation
                to={`/${text.toLowerCase().replace(' ', '-')}`} // Generates the appropriate route
                underline="none"
                color="inherit"
                sx={{
                  textTransform: 'uppercase', // Makes the text uppercase
                  fontWeight: 100,
                  '&:hover': {
                    color: theme.palette.primary.light,
                  },
                }}
              >
                {text}
              </Link>
            ))}
          </Box>
        ) : (
          // Menu icon for mobile screens
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer for mobile navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {['Skills', 'Projects', 'Blogs', 'Work Experience'].map((text) => (
            <ListItem
              button
              component={RouterLink}
              to={`/${text.toLowerCase().replace(' ', '-')}`}
              onClick={toggleDrawer(false)}
              key={text}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
