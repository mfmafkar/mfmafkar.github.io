import { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';
import Skill from '../types/SkillType';
import Project from '../types/ProjectType';
import Blogs from './Blogs';
import ProfessionalExperience from './ProfessionalExperience';
import { getTenure } from '../utils/utils';

const Home = () => {
  const [showUnderDevelopment, setShowUnderDevelopment] = useState(true);

  // Update page title and meta description dynamically for better SEO
  useEffect(() => {
    document.title = 'Afkar Fasehudeen - Software Engineer | Full Stack Developer';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Afkar Fasehudeen - Experienced Software Engineer with 5+ years expertise in React, Node.js, AWS, Python, AI/ML, and cloud solutions. Building scalable applications with modern technologies.'
      );
    }
  }, []);

  const skills: Skill[] = [
    // Frontend Technologies
    { title: 'JavaScript' },
    { title: 'TypeScript' },
    { title: 'React' },
    { title: 'Next.js' },
    { title: 'Material UI' },
    { title: 'Redux' },
    { title: 'MobX' },
    { title: 'Apollo Client' },
    
    
    // Backend Technologies  
    { title: 'Node.js' },
    { title: 'Python' },
    { title: 'Flask' },
    { title: 'Fastify' },
    { title: 'GraphQL' },

    
    // Cloud & DevOps
    { title: 'AWS' },
    { title: 'AWS Lambda' },
    { title: 'AWS CDK' },
    { title: 'AWS Step Functions' },
    { title: 'AWS AppSync' },
    { title: 'Amazon S3' },
    { title: 'API Gateway' },
    { title: 'AWS SES' },
    { title: 'AWS Event Bridge' },
    { title: 'AWS SQS' },
    { title: 'Amazon OpenSearch' },
    { title: 'Serverless' },
    { title: 'Serverless Framework' },
    { title: 'Cloudflare Workers' },
    { title: 'Docker' },
    { title: 'GitLab CI' },
    { title: 'GitHub Actions' },
    
    // Databases
    { title: 'PostgreSQL' },
    { title: 'MongoDB' },
    { title: 'DynamoDB' },
    { title: 'Amazon DynamoDB' },
    { title: 'SQLite' },
    { title: 'MySQL' },
    { title: 'Firebase' },
    
    // Machine Learning & Data
    { title: 'TensorFlow' },
    { title: 'Keras' },
    { title: 'PlotyJS' },
    { title: 'LangChain' },
    { title: 'OpenAI' },
    { title: 'Sentence Transformers' },

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
      link: 'https://github.com/mfmafkar/AuctionService',
    },
    {
      title: 'EweShare',
      description:
        'Ewe share is an IOT device which comes with a cross platform mobile application, which was made targeting home electric car charge hosts and electric car owners.',
      skills: ['Arduino', 'Firebase', 'Flask', 'Ionic3', 'Heroku', 'MySQL'],
      link: 'https://github.com/mfmafkar/EWeShare',
    },
    {
      title: 'Gold Trends',
      description:
        'Gold Trends is forecast system that is capable of forecasting future gold price, which was done based on a novel approach where multivariate input variables like major stock market indices and crude oil prices that correlates with gold price considered as predictor variables for target variable gold price. Multivariate time series forecasting was done with the use deep learning approach.',
      skills: [
        'Keras',
        'TensorFlow',
        'Python',
        'Flask',
        'PlotyJS',
        'HTML',
        'CSS',
        'JavaScript',
      ],
      link: 'https://github.com/mfmafkar/GoldTrendsWeb',
    },
  ];

  const blogs = [
    {
      title: 'Getting Started with Amazon OpenSearch: A Comprehensive Guide',
      description:
        'OpenSearch is a distributed and RESTful search and analytics engine. It is a fork of Elasticsearch and was created after AWS announced that they would no longer be contributing to Elasticsearch.',
      link: 'https://medium.com/@mfmafkar/getting-started-with-opensearch-a-comprehensive-guide-eeda11c925cb',
    },
    {
      title: 'Seamlessly Migrating Your Amazon OpenSearch Domain',
      description:
        'Learn how to seamlessly migrate your Amazon OpenSearch domain to a new domain with this step-by-step guide. This article covers essential migration steps, including snapshots, data restoration, and best practices for a smooth transition.',
      link: 'https://medium.com/@mfmafkar/seamlessly-migrate-your-amazon-opensearch-domain-26ec15731556',
    },
    {
      title: 'Getting Started with Cloudflare Workers: A Beginner\'s Guide',
      description:
        'Kickstart your journey with Cloudflare Workers in this beginner-friendly guide. Learn how to build and deploy serverless applications at the edge, explore real-world use cases, and leverage advanced features for scalable, high-performance solutions.',
      link: 'https://medium.com/@mfmafkar/getting-started-with-cloudflare-workers-a-beginners-guide-fba41eec327a',
    },
  ];

  const experiences = [
    {
      company: 'Consultancy',
      role: 'Senior Software Engineer',
      tenure: `${getTenure('2025-06-01')}`,
      description: '',
      technologies: [
        'Typescript',
        'Next.js',
        'AWS CDK',
        'AWS Lambda',
        'Node.js',
        'AWS',
        'Serverless',
        'Fastify',
        'Docker',
        'PostgreSQL',
      ],
      link: '',
    },
    {
      company: 'Wiley',
      role: 'Software Engineer',
      tenure: 'July 2021 to June 2025 (4 years)',
      description:
        'Wiley is a multinational publishing company that produces books, journals, and other materials in a variety of fields, and provides online education services and digital solutions for individuals and organizations.',
      technologies: [
        'Typescript',
        'JavaScript',
        'Python',
        'React JS',
        'MobX',
        'Apollo client',
        'Material UI',
        'Node.js',
        'GraphQL',
        'AWS Lambda',
        'AWS Step Functions',
        'Amazon S3',
        'Amazon DynamoDB',
        'AWS AppSync',
        'Amazon OpenSearch',
        'Cloudflare worker',
        'Serverless framework',
        'GitLab CI',
      ],
      link: 'https://www.wiley.com/en-sg',
    },
    {
      company: 'Salpo Technologies (PVT) LTD',
      role: 'Trainee Software Engineer',
      tenure: 'July 2019 to July 2020 (1 year)',
      description:
        'Salpo is a UK based company which builds custom software platforms and mobile apps to help businesses grow and solve critical organizational problems.',
      technologies: [
        'React-Native',
        'React',
        'Redux',
        'Laravel',
        'PostgreSQL',
        'SQLite',
        'Node.js',
      ],
      link: 'https://www.linkedin.com/company/paul-lawrence-793109210/',
    },
  ];

  const handleCloseBanner = () => {
    setShowUnderDevelopment(false);
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Under Development Banner */}
      {showUnderDevelopment && (
        <Box
          sx={{
            background: 'linear-gradient(135deg, #1a365d 0%, #2d5aa0 100%)',
            color: '#FFFFFF',
            py: 2,
            px: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 4px 20px rgba(26, 54, 93, 0.25)',
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 500, color: 'white !important' }}>
            🚀 This site is currently under development
          </Typography>
          <IconButton 
            aria-label="Close" 
            onClick={handleCloseBanner}
            sx={{ 
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      {/* Hero Section with Gradient Background */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a365d 0%, #2d5aa0 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Profile />
        </Container>
      </Box>

      {/* Main Content Sections */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 12 } }}>
          
          {/* Skills Section */}
          <Box
            component="section"
            sx={{
              scroll: 'margin-top: 2rem',
              '& > *': { animation: 'fadeInUp 0.6s ease-out' },
            }}
          >
            <Skills skills={skills} />
          </Box>

          {/* Projects Section */}
          <Box
            component="section"
            sx={{
              py: 4,
              borderRadius: 3,
              background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
              '& > *': { animation: 'fadeInUp 0.6s ease-out 0.2s both' },
            }}
          >
            <Box sx={{ px: { xs: 2, md: 4 } }}>
              <Projects projects={projects} />
            </Box>
          </Box>

          {/* Blogs Section */}
          <Box
            component="section"
            sx={{
              '& > *': { animation: 'fadeInUp 0.6s ease-out 0.4s both' },
            }}
          >
            <Blogs blogs={blogs} />
          </Box>

          {/* Professional Experience Section */}
          <Box
            component="section"
            sx={{
              py: 4,
              borderRadius: 3,
              background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
              '& > *': { animation: 'fadeInUp 0.6s ease-out 0.6s both' },
            }}
          >
            <Box sx={{ px: { xs: 2, md: 4 } }}>
              <ProfessionalExperience experiences={experiences} />
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Modern Footer */}
      <Box
        component="footer"
        sx={{
          mt: 8,
          py: 6,
          background: 'linear-gradient(135deg, #1a365d 0%, #2d5aa0 100%)',
          color: '#ffffff',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #3182ce, transparent)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#ffffff',
                fontWeight: 400,
                fontSize: '1.0rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.4)'
              }}
            >
              &copy; {new Date().getFullYear()} Afkar Fasehudeen. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Add custom CSS for animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Home;
