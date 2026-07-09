import { useCallback, useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import logo from '../assets/afk.jpg';

interface NavItem {
  label: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Blogs', id: 'blogs' },
  { label: 'Experience', id: 'experience' },
  { label: 'Certifications', id: 'certifications' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(15, 42, 68, 0.75)'
            : 'linear-gradient(180deg, rgba(15, 42, 68, 0.35) 0%, rgba(15, 42, 68, 0) 100%)',
          backdropFilter: scrolled ? 'blur(18px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(180%)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255, 255, 255, 0.08)'
            : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.18)' : 'none',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, md: 72 },
              justifyContent: { xs: 'flex-start', md: 'space-between' },
            }}
          >
            {/* Brand */}
            <Box
              component="button"
              onClick={() => handleNavClick('home')}
              aria-label="Afkar Fasehudeen - back to top"
              sx={{
                cursor: 'pointer',
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                border: 'none',
                background: 'transparent',
                p: 0,
                userSelect: 'none',
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Afkar Fasehudeen logo"
                sx={{
                  width: { xs: 44, md: 48 },
                  height: { xs: 44, md: 48 },
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)',
                  transition: 'transform 0.25s ease',
                  '&:hover': { transform: 'scale(1.06)' },
                }}
              />
            </Box>

            {/* Desktop nav links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    disableRipple
                    sx={{
                      position: 'relative',
                      color: '#fff',
                      fontWeight: 500,
                      fontSize: '0.92rem',
                      textTransform: 'none',
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      opacity: isActive ? 1 : 0.72,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        opacity: 1,
                        background: 'rgba(255, 255, 255, 0.08)',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: '20%',
                        right: '20%',
                        bottom: 4,
                        height: '2px',
                        borderRadius: '2px',
                        background: 'linear-gradient(90deg, #3182ce, #63b3ed)',
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            {/* Mobile hamburger */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: '#fff',
                background: 'rgba(255, 255, 255, 0.1)',
                '&:hover': { background: 'rgba(255, 255, 255, 0.18)' },
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile navigation drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              background: 'linear-gradient(165deg, #1a365d 0%, #0f2a44 100%)',
              color: '#fff',
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1.5 }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            sx={{ color: '#fff' }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 2, pt: 1 }}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => handleNavClick(item.id)}
                  sx={{
                    borderRadius: '10px',
                    borderLeft: isActive
                      ? '3px solid #63b3ed'
                      : '3px solid transparent',
                    background: isActive ? 'rgba(99, 179, 237, 0.14)' : 'transparent',
                    transition: 'all 0.2s ease',
                    '&:hover': { background: 'rgba(255, 255, 255, 0.08)' },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontWeight: isActive ? 600 : 400,
                        fontSize: '1rem',
                        color: '#fff',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
