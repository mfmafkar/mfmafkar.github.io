import { Box, Typography, Grid } from '@mui/material';
import SocialLinks from './SocialLinks';

const Profile = () => {
  return (
    <Grid>
      {/* Profile Picture */}
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="center">
          <img
            src="https://avatars.githubusercontent.com/u/35808593?v=4"
            alt="Profile"
            width={250}
            height={250}
            style={{ borderRadius: '50%', overflow: 'hidden' }}
          />
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        {/* Name and Title */}
        <Typography variant="h3" gutterBottom align="center">
          Afkar Fasehudeen
        </Typography>
        <Typography variant="h4" gutterBottom align="center">
          Software Engineer
        </Typography>
        {/* Social Links Component */}

        <SocialLinks />
        {/* Contact Button Component */}
        {/* <ContactButton /> */}
      </Grid>

      <Typography variant="body1" paragraph align="center">
        Hello! I’m a passionate full-stack software engineer with over four
        years of experience in designing and developing software solutions. Have
        a strong foundation in full-stack development, with expertise in
        JavaScript, TypeScript, Python, Node.js, and React. My experience
        extends to cloud technologies, including AWS, and implementing
        serverless architectures to create scalable and efficient solutions.
        Throughout the career, have displayed a remarkable ability to quickly
        adapt to new technologies and provide innovative solutions to intricate
        problems. I am a highly motivated individual who thrives on new
        challenges and continually seeks opportunities to expand my technical
        knowledge and skill set. Committed to contributing to the success of the
        organization, I am always on the lookout for ways to enhance my
        performance and stay in touch of the latest industry trends.
      </Typography>
    </Grid>
  );
};

export default Profile;
