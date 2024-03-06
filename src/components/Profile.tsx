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
        Hello! I'm a full-stack developer passionate about building scalable,
        performance-oriented cloud applications and infrastructure. I believe in
        continuous learning and failing fast which has helped me quickly adapt
        to new technologies and engineering environments. Having over 3 years of
        experience in the design and development of cloud solutions together
        with a strong passion to learn helps me in driving ideas from discovery,
        to design, development, and finally production. Having worked with agile
        software teams I am both results-oriented and delivery minded.
      </Typography>
    </Grid>
  );
};

export default Profile;
