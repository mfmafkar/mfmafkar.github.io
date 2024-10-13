import Project from "./types/ProjectType";
import Skill from "./types/SkillType";

export const skills: Skill[] = [
  { title: 'JavaScript' },
  { title: 'TypeScript' },
  { title: 'Python' },
  { title: 'React' },
  { title: 'Node.js' },
  { title: 'Serverless' },
  { title: 'AWS' },
];

export const projects: Project[] = [
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
      'Gold Trends is a forecast system that is capable of forecasting future gold prices, which was done based on a novel approach where multivariate input variables like major stock market indices and crude oil prices that correlate with gold price considered as predictor variables for the target variable gold price. Multivariate time series forecasting was done with the use of a deep learning approach.',
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
  },
];

export const blogs = [
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
];

export const experiences = [
  {
    company: 'Wiley',
    role: 'Software Engineer',
    tenure: 'July 2021 to Present (3 years and 2 months)',
    description:
      'Wiley is a multinational publishing company that produces books, journals, and other materials in a variety of fields and provides online education services and digital solutions for individuals and organizations.',
    technologies: [
      'Typescript',
      'JavaScript',
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
  },
  {
    company: 'Salpo Technologies (PVT) LTD',
    role: 'Trainee Software Engineer',
    tenure: 'July 2019 to July 2020 (1 year)',
    description:
      'Salpo is a UK based company that builds custom software platforms and mobile apps to help businesses grow and solve critical organizational problems.',
    technologies: [
      'React-Native',
      'React',
      'Redux',
      'Laravel',
      'PostgreSQL',
      'SQLite',
      'Node.js',
    ],
  },
];
