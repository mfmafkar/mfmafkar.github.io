import {
  Grid,
  Typography,
  // Button,
  Card,
  CardContent,
  IconButton,
  Box,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Profile = () => {
  return (
    <Grid item xs={12}>
      {/* Profile Picture */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          // backgroundColor: 'yellow',
          justifyContent: 'center',
        }}
      >
        <Box>
          <img
            src="https://avatars.githubusercontent.com/u/35808593?v=4"
            alt="Profile"
            width={250}
            height={250}
            style={{ borderRadius: '300%', overflow: 'hidden' }}
          />
        </Box>

        <Box>
          {/* Name and Title */}
          <Typography variant="h3" gutterBottom>
            Afkar Fasehudeen
          </Typography>
          <Typography variant="h4" gutterBottom>
            Software Engineer
          </Typography>
          {/* Social Links Component */}
          <SocialLinks />

          {/* Contact Button Component */}
          {/* <ContactButton /> */}
        </Box>
      </Box>
      <Typography variant="body1" paragraph>
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

const SocialLinks = () => {
  return (
    <Grid item xs={12}>
      <Grid container>
        {/* Social Media Icons */}
        <IconButton
          aria-label="GitHub"
          href="https://github.com/mfmafkar"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/afkar-fasehudeen-9316b9160/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="Twitter"
          href="https://twitter.com/mfmafkar"
          target="_blank"
        >
          <TwitterIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

// const ContactButton = () => {
//   const handleContactClick = () => {
//     window.location.href = 'mailto:mfmafkar@gmail.com';
//   };

//   return (
//     <Grid item xs={12}>
//       {/* Contact Button */}
//       <Button variant="contained" color="primary" onClick={handleContactClick}>
//         Contact Me
//       </Button>
//     </Grid>
//   );
// };

const Skills = ({ skills }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2}>
        {/* Skills Cards */}
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{skill.title}</Typography>
                <Typography variant="body2">{skill.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const Projects = ({ projects }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {/* Projects Cards */}
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const Home = () => {
  const skills = [
    { title: 'JavaScript', description: 'Proficient in modern JS frameworks' },
    { title: 'React', description: 'Experience in building SPA with React' },
    { title: 'Node.js', description: 'Backend development using Node.js' },
    {
      title: 'HTML/CSS',
      description: 'Solid understanding of web fundamentals',
    },
  ];

  const projects = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
    { title: 'Project 3', description: 'Description of Project 3' },
  ];

  return (
    <Grid container spacing={4}>
      {/* Profile Component */}
      <Profile />

      {/* Skills Component */}
      <Skills skills={skills} />
      {/* Projects Component */}
      <Projects projects={projects} />
    </Grid>
  );
};

export default Home;
