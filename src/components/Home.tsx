import { useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';
import Skill from '../types/SkillType';
import Project from '../types/ProjectType';
import Blogs from './Blogs';
import ProfessionalExperience from './ProfessionalExperience';
import Certifications from './Certifications';
import CertificationType from '../types/CertificationType';
import { getTenure } from '../utils/utils';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';

const SECTION_SCROLL_OFFSET = { xs: '72px', md: '80px' };

const Home = () => {
  // Update page title and meta description dynamically for better SEO
  useEffect(() => {
    document.title =
      'Afkar Fasehudeen - Senior Software Engineer | Full Stack Engineer';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Afkar Fasehudeen - Experienced Software Engineer with 5+ years expertise in React, Node.js, AWS, Python, AI/ML, and cloud solutions. Building scalable applications with modern technologies.',
      );
    }
  }, []);

  const skills: Skill[] = [
    // Programming Languages
    { title: 'JavaScript' },
    { title: 'TypeScript' },
    { title: 'Python' },

    // Frontend Technologies
    { title: 'React' },
    { title: 'Next.js' },
    { title: 'Redux' },
    { title: 'MobX' },
    { title: 'Apollo Client' },
    { title: 'Material UI' },

    // Backend Technologies
    { title: 'Node.js' },
    { title: 'GraphQL' },
    { title: 'Serverless Framework' },
    { title: 'Flask' },
    { title: 'Fastify' },

    // Cloud & DevOps
    { title: 'AWS' },
    { title: 'AWS Lambda' },
    { title: 'AWS CDK' },
    { title: 'AWS Step Functions' },
    { title: 'AWS AppSync' },
    { title: 'Amazon S3' },
    { title: 'API Gateway' },
    { title: 'AWS EventBridge' },
    { title: 'AWS SQS' },
    { title: 'AWS SES' },
    { title: 'Amazon OpenSearch' },
    { title: 'Cloudflare Workers' },
    { title: 'Docker' },
    { title: 'GitHub Actions' },
    { title: 'GitLab CI' },
    { title: 'Terraform' },

    // Databases
    { title: 'DynamoDB' },
    { title: 'MySQL' },
    { title: 'SQLite' },
    { title: 'MongoDB' },
    { title: 'PostgreSQL' },
    { title: 'Firebase' },

    // AI & Machine Learning
    { title: 'TensorFlow' },
    { title: 'Keras' },
    { title: 'LangChain' },
    { title: 'OpenAI' },
    { title: 'Sentence Transformers' },

    // AI Coding Tools
    { title: 'GitHub Copilot' },
    { title: 'Cursor' },
    { title: 'Claude Code' },
  ];

  const projects: Project[] = [
    {
      title: 'Store Admin Portal',
      description: `Full-stack retail store management system with AI-powered semantic search, dashboard business 
insights, and role-based access control covering inventory, sales, orders, supplier management, and 
financial reporting.`,
      skills: [
        'Next.js 16',
        'React 18',
        'TypeScript',
        'Material UI',
        'MongoDB Atlas',
        'MongoDB Vector Search',
        'Cloudflare R2',
        'Cloudflare D1',
        'NextAuth.js',
        'HuggingFace Inference API',
        'Vercel',
        'Resend',
      ],
      link: 'https://github.com/mfmafkar/StoreAdminPortal',
    },
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
      title: 'Gold Trends',
      description:
        'Gold Trends is forecast system that is capable of forecasting future gold price, which was done based on a novel approach where multivariate input variables like major stock market indices and crude oil prices that correlates with gold price considered as predictor variables for target variable gold price. Multivariate time series forecasting was done with the use deep learning approach.',
      skills: [
        'Keras',
        'TensorFlow',
        'Python',
        'Flask',
        'Plotly.js',
        'HTML',
        'CSS',
        'JavaScript',
      ],
      link: 'https://github.com/mfmafkar/GoldTrendsWeb',
    },
    {
      title: 'EweShare',
      description:
        'Ewe share is an IOT device which comes with a cross platform mobile application, which was made targeting home electric car charge hosts and electric car owners.',
      skills: ['Arduino', 'Firebase', 'Flask', 'Ionic3', 'Heroku', 'MySQL'],
      link: 'https://github.com/mfmafkar/EWeShare',
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
      title: "Getting Started with Cloudflare Workers: A Beginner's Guide",
      description:
        'Kickstart your journey with Cloudflare Workers in this beginner-friendly guide. Learn how to build and deploy serverless applications at the edge, explore real-world use cases, and leverage advanced features for scalable, high-performance solutions.',
      link: 'https://medium.com/@mfmafkar/getting-started-with-cloudflare-workers-a-beginners-guide-fba41eec327a',
    },
  ];

  const experiences = [
    {
      company: 'Insighture',
      role: 'Senior Software Engineer',
      tenure: `${getTenure('2025-06-01')}`,
      description:
        'Insighture is a global technology consulting company with offices in Melbourne and Colombo, specializing in end-to-end product delivery, cloud solutions, DevOps, infrastructure services, and AI/ML.',
      technologies: [
        // Languages
        'Typescript',
        'JavaScript',
        'Go',

        // Backend Frameworks
        'Node.js',
        'Fastify',
        'Serverless',

        // AWS Technologies
        'AWS CDK',
        'AWS Lambda',
        'AWS Event Bridge',
        'API Gateway',
        'Amazon ECS',

        // Databases & Infrastructure
        'DynamoDB',
        'PostgreSQL',
        'SQLite',
        'Docker',
        'Terraform',
        'GitHub Actions',
        'GitLab CI',
        'OpenTelemetry',
        'Grafana',
        'Playwright',

        // Frontend Frameworks
        'Next.js',
        'React',
        'Electron',
      ],
      link: 'https://www.insighture.com/',
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
        'Terraform',
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

  const certifications: CertificationType[] = [
    // Formal Certifications
    {
      title: 'Certificate of Completion: Introduction to Agent Skills',
      issuer: 'Anthropic',
      year: 'May 2026',
      category: 'AI/ML',
      type: 'Certification',
      link: 'https://verify.skilljar.com/c/77x36by4ihku',
    },
    {
      title: 'HashiCorp Certified: Terraform Associate (004)',
      issuer: 'HashiCorp',
      year: 'Apr 2026',
      category: 'DevOps',
      type: 'Certification',
      link: 'https://www.credly.com/badges/ea1003fa-fba9-4740-9fd1-ab39edabb897/',
    },
    {
      title: 'AWS Partner: Technical Accredited',
      issuer: 'Amazon Web Services',
      year: 'Sep 2025',
      category: 'Cloud',
      type: 'Certification',
      link: 'https://www.credly.com/badges/d32086cf-e1df-43fa-b1fe-3b57f5df3e69',
    },
    // Professional Development
    {
      title: 'React – Front to Back Development',
      issuer: 'Udemy',
      category: 'Frontend',
      type: 'Course',
    },
    {
      title: 'Serverless Framework Bootcamp: Node.js, AWS & Microservices',
      issuer: 'Udemy',
      category: 'Backend',
      type: 'Course',
    },
    {
      title: 'AWS Solutions Architect Associate Course',
      issuer: 'Udemy',
      category: 'Cloud',
      type: 'Course',
    },
    {
      title: 'ChatGPT & LangChain – Developer Masterclass',
      issuer: 'Udemy',
      category: 'AI/ML',
      type: 'Course',
    },
    {
      title: 'Terraform – Beginner to Advanced',
      issuer: 'Udemy',
      category: 'DevOps',
      type: 'Course',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />

      {/* Hero Section with Gradient Background */}
      <Box
        id="home"
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
            background:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 8, md: 12 },
          }}
        >
          {/* Skills Section */}
          <Box
            id="skills"
            component="section"
            sx={{
              scrollMarginTop: SECTION_SCROLL_OFFSET,
              '& > *': { animation: 'fadeInUp 0.6s ease-out' },
            }}
          >
            <Skills skills={skills} />
          </Box>

          {/* Projects Section */}
          <Box
            id="projects"
            component="section"
            sx={{
              py: 4,
              borderRadius: 3,
              scrollMarginTop: SECTION_SCROLL_OFFSET,
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
            id="blogs"
            component="section"
            sx={{
              scrollMarginTop: SECTION_SCROLL_OFFSET,
              '& > *': { animation: 'fadeInUp 0.6s ease-out 0.4s both' },
            }}
          >
            <Blogs blogs={blogs} />
          </Box>

          {/* Professional Experience Section */}
          <Box
            id="experience"
            component="section"
            sx={{
              py: 4,
              borderRadius: 3,
              scrollMarginTop: SECTION_SCROLL_OFFSET,
              background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
              '& > *': { animation: 'fadeInUp 0.6s ease-out 0.6s both' },
            }}
          >
            <Box sx={{ px: { xs: 2, md: 4 } }}>
              <ProfessionalExperience experiences={experiences} />
            </Box>
          </Box>

          {/* Certifications Section */}
          <Box
            id="certifications"
            component="section"
            sx={{
              scrollMarginTop: SECTION_SCROLL_OFFSET,
              '& > *': { animation: 'fadeInUp 0.6s ease-out 0.8s both' },
            }}
          >
            <Certifications certifications={certifications} />
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
            background:
              'linear-gradient(90deg, transparent, #3182ce, transparent)',
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
                textShadow: '0 2px 4px rgba(0,0,0,0.4)',
              }}
            >
              &copy; {new Date().getFullYear()} Afkar Fasehudeen. All rights
              reserved.
            </Typography>
          </Box>
        </Container>
      </Box>

      <ScrollToTop />

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
