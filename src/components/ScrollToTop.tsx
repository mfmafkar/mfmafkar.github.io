import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    threshold: 300,
    disableHysteresis: true,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={handleClick}
        aria-label="Scroll back to top"
        size="medium"
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 32 },
          right: { xs: 20, md: 32 },
          zIndex: (theme) => theme.zIndex.speedDial,
          color: '#fff',
          background: 'linear-gradient(135deg, #1a365d 0%, #3182ce 100%)',
          boxShadow: '0 8px 24px rgba(26, 54, 93, 0.45)',
          transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease',
          '&:hover': {
            background: 'linear-gradient(135deg, #2d5aa0 0%, #63b3ed 100%)',
            transform: 'translateY(-4px)',
            boxShadow: '0 14px 32px rgba(26, 54, 93, 0.55)',
          },
        }}
      >
        <KeyboardArrowUpRoundedIcon fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
