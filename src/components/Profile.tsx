import { Box, Typography, Grid, Avatar } from '@mui/material';
import SocialLinks from './SocialLinks';

const Profile = () => {
  return (
    <Grid container spacing={4} alignItems="center" justifyContent="center">
      {/* Profile Picture */}
      <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
        <Box
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -8,
              left: -8,
              right: -8,
              bottom: -8,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
              zIndex: 0,
            },
          }}
        >
          <Avatar
            src="https://avatars.githubusercontent.com/u/35808593?v=4"
            alt="Afkar Fasehudeen"
            sx={{
              width: { xs: 200, md: 280 },
              height: { xs: 200, md: 280 },
              border: '4px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              zIndex: 1,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <Box textAlign={{ xs: 'center', md: 'left' }}>
          {/* Name and Title */}
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 1,
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Afkar Fasehudeen
          </Typography>
          
          <Typography 
            variant="h4" 
            sx={{ 
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 500,
              mb: 3,
              color: 'rgba(255, 255, 255, 0.95)',
            }}
          >
            Software Engineer
          </Typography>

          {/* Social Links */}
          <Box 
            sx={{ 
              mb: 4,
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
            }}
          >
            <SocialLinks />
          </Box>

          {/* Brief Description */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 400,
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '600px',
              mx: { xs: 'auto', md: 0 },
            }}
          >
            Passionate full-stack engineer with 5+ years of experience building scalable web applications and cloud solutions.
          </Typography>
        </Box>
      </Grid>

      {/* Detailed Description - Full Width */}
      <Grid size={{ xs: 12 }}>
        <Box 
          sx={{ 
            mt: { xs: 4, md: 6 },
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.1rem',
              lineHeight: 1.7,
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 400,
            }}
          >
            I'm a passionate full-stack software engineer with over five years of experience in software development. 
            I have a strong foundation in full-stack development, with expertise in JavaScript, TypeScript, Python, Node.js, and React. 
            My experience extends to cloud technologies, including AWS, and implementing serverless architectures to create scalable and efficient solutions. 
            Throughout my career, I have displayed a remarkable ability to quickly adapt to new technologies and provide innovative solutions to complex problems. 
            I am a highly motivated individual who thrives on new challenges and continually seeks opportunities to expand my technical knowledge and skill set.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Profile;
