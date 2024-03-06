import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';
import Skill from '../types/SkillType';
import Project from '../types/ProjectType';

const Home = () => {
  const [showUnderDevelopment, setShowUnderDevelopment] = useState(true);

  const skills: Skill[] = [
    { title: 'JavaScript' },
    { title: 'Typescript' },
    { title: 'Python' },
    { title: 'React' },
    { title: 'Node.js' },
    { title: 'Serverless' },
    { title: 'AWS' },
  ];

  const projects: Project[] = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
    { title: 'Project 3', description: 'Description of Project 3' },
  ];

  const handleCloseBanner = () => {
    setShowUnderDevelopment(false);
  };

  return (
    // TODO :: banner is not responsive ...
    <Box>
      {/* Under Development Banner */}
      {showUnderDevelopment && (
        <Box>
          <Box
            sx={{
              backgroundColor: '#dd1406',
              color: '#fff',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography variant="body1">
              This site is currently under development.
            </Typography>
            <IconButton aria-label="Close" onClick={handleCloseBanner}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      )}

      {/* Profile Component */}
      <Profile />

      {/* Skills Component */}
      <Skills skills={skills} />
      {/* Projects Component */}
      <Projects projects={projects} />
    </Box>
  );
};

export default Home;
