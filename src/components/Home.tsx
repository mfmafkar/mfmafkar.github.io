import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';
import Skill from '../types/SkillType';
import Project from '../types/ProjectType';
import Blogs from './Blogs';
import logo from '../assets/logo.jpg';

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
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
    { title: 'Project 3', description: 'Description of Project 3' },
  ];

  const blogs = [
    {
      title: 'Building a Serverless API with AWS Lambda and Node.js',
      description:
        'Learn how to create a serverless API using AWS Lambda and Node.js, and deploy it using AWS API Gateway.',
      link: 'https://example.com/serverless-api-aws-lambda-nodejs',
    },
    {
      title: 'Deploying a React App to AWS S3 and CloudFront',
      description:
        'Step-by-step guide on deploying a React application to AWS S3 and using CloudFront as a CDN for optimal performance.',
      link: 'https://example.com/deploy-react-aws-s3-cloudfront',
    },
    {
      title: 'Creating a RESTful API with Node.js and Express',
      description:
        'Learn how to build a RESTful API using Node.js and Express, including handling routes, requests, and responses.',
      link: 'https://example.com/nodejs-express-rest-api',
    },
    {
      title: 'Introduction to AWS Lambda: Serverless Computing in the Cloud',
      description:
        'An overview of AWS Lambda and its benefits, along with practical examples of using Lambda functions for various tasks.',
      link: 'https://example.com/intro-aws-lambda-serverless',
    },
    {
      title: 'Serverless Architecture: Pros, Cons, and Best Practices',
      description:
        'Explore the advantages and challenges of serverless architecture, along with best practices for designing and deploying serverless applications.',
      link: 'https://example.com/serverless-architecture-pros-cons-best-practices',
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

      <img
        src={logo}
        alt="Logo"
        style={{ marginRight: '10px', height: '100px', width: '100px' }}
      />
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
