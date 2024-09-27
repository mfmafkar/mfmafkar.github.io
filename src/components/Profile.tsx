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
        years of experience in developing software applications. My expertise
        lies in Node.js and React, complemented by a solid foundation in AWS
        cloud technologies and serverless architectures. I thrive on tackling
        new challenges and continuously seek opportunities to expand my
        technical knowledge and skill set. My approach to engineering is rooted
        in continuous learning and rapid adaptation, which has enabled me to
        quickly integrate new technologies and deliver innovative solutions. I
        excel in driving ideas from discovery to production, working effectively
        within agile teams to ensure results-oriented and timely delivery. I am
        committed to contributing to organizational success and staying abreast
        of the latest industry trends.
      </Typography>
    </Grid>
  );
};

export default Profile;
