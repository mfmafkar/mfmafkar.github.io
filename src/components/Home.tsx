import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
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
      title: 'Getting Started with Cloudflare Workers: A Beginner’s Guide',
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
      description:
        '',
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
    <Box>
      {/* Under Development Banner */}
      {showUnderDevelopment && (
        <Box
          sx={{
            backgroundColor: '#12354f',
            color: '#FFFFFF',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // width: '100%',
            // boxSizing: 'border-box',
            // overflow: 'hidden',
            // position: 'fixed',
            // top: 0,
            // left: 0,
            // zIndex: 1000,
          }}
        >
          <Typography variant="body1">
            This site is currently under development.
          </Typography>
          <IconButton aria-label="Close" onClick={handleCloseBanner}>
            <CloseIcon sx={{ color: '#FFFFFF' }} />
          </IconButton>
        </Box>
      )}

      {/* Main Content */}
      <Stack m={2} spacing={10} sx={{ backgroundColor: 'background.default' }}>
        <Profile />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Blogs blogs={blogs} />
        <ProfessionalExperience experiences={experiences} />
      </Stack>

      {/* Footer */}
      <Box sx={{ mt: 8, py: 3, backgroundColor: '#12354f', color: '#FFFFFF' }}>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Afkar Fasehudeen
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
