import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';
import Skill from '../types/SkillType';
import Project from '../types/ProjectType';
import Blogs from './Blogs';

const Home = () => {
  const [showUnderDevelopment, setShowUnderDevelopment] = useState(true);

  const skills: Skill[] = [
    { title: 'JavaScript' },
    { title: 'TypeScript' },
    { title: 'Python' },
    { title: 'React' },
    { title: 'Node.js' },
    { title: 'Serverless' },
    { title: 'AWS' },
  ];

  const projects: Project[] = [
    {
      title: 'Auction Service',
      description:
        'Developed a robust auction service leveraging serverless architecture and AWS technologies. This project aimed to provide a scalable and reliable platform for conducting auctions seamlessly.',
      skills: [
        'Node.js',
        'Serverless',
        'AWS',
        'Dynamo DB',
        'API Gateway',
        'AWS SES',
        'AWS Event Bridge',
        'AWS SQS',
        'Amazon S3',
      ],
    },
    {
      title: 'EweShare',
      description:
        'Ewe share is an IOT device which comes with a cross platform mobile application, which was made targeting home electric car charge hosts and electric car owners.',
      skills: ['Arduino', 'Firebase', 'Flask', 'Ionic3', 'Heroku', 'MySQL'],
    },
    {
      title: 'Gold Trends',
      description:
        'Gold Trends is forecast system that is capable of forecasting future gold price, which was done based on a novel approach where multivariate input variables like major stock market indices and crude oil prices that correlates with gold price considered as predictor variables for target variable gold price. Multivariate time series forecasting was done with the use deep learning approach.',
      skills: ['Keras', 'TensorFlow', 'Python', 'Flask', 'PlotyJS', 'HTML', 'CSS', 'JavaScript'],
    },
  ];

  const blogs = [
    {
      title: 'Getting Started with OpenSearch: A Comprehensive Guide',
      description:
        'OpenSearch is a distributed and RESTful search and analytics engine. It is a fork of Elasticsearch and was created after AWS announced that they would no longer be contributing to Elasticsearch.',
      link: 'https://medium.com/@mfmafkar/getting-started-with-opensearch-a-comprehensive-guide-eeda11c925cb',
    },
  ];

  const handleCloseBanner = () => {
    setShowUnderDevelopment(false);
  };

  // <<< TODO >>>
  // 1.Need to add navbar component with LOGO, BLOG, PROJECTS, DARK MODE SWITCHER...
  // 2.Need to come up with footer components with LOGO, usual footer stuffs
  // 3.Need to have medium articles/Public git repos...
  // 4.Implementing show more functionality for projects/blogs sections ...
  return (
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

      {/* Blogs Component */}
      <Blogs blogs={blogs} />

      {/* Footer */}
      <Box
        sx={{
          mt: 3,
          py: 3,
        }}
      >
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Afkar Fasehudeen
        </Typography>
        {/* Add more footer content here */}
      </Box>
    </Box>
  );
};

export default Home;
