import React from 'react';
import { Grid, Typography, Card, CardContent, Box, Chip, Avatar } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Skill from '../types/SkillType';

type SkillsProps = {
  skills: Skill[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Group skills by category for better organization based on actual experience
  const programmingLanguages = ['JavaScript', 'TypeScript', 'Python'];
  const frontendSkills = ['React', 'Next.js', 'Redux', 'MobX', 'Apollo Client', 'Material UI'];
  const backendSkills = ['Node.js', 'GraphQL', 'Serverless Framework', 'Flask', 'Fastify'];
  const cloudSkills = ['AWS', 'AWS Lambda', 'AWS CDK', 'AWS Step Functions', 'AWS AppSync', 'Amazon S3', 'API Gateway', 'AWS EventBridge', 'AWS SQS', 'AWS SES', 'Amazon OpenSearch', 'Cloudflare Workers', 'Docker', 'GitHub Actions', 'GitLab CI'];
  const databaseSkills = ['DynamoDB', 'MySQL', 'SQLite', 'MongoDB', 'PostgreSQL', 'Firebase'];
  const mlSkills = ['TensorFlow', 'Keras', 'LangChain', 'OpenAI', 'Sentence Transformers'];
  const aiToolsSkills = ['GitHub Copilot', 'Cursor'];

  const skillCategories = [
    { 
      title: 'Programming Languages', 
      skills: skills.filter(skill => programmingLanguages.includes(skill.title)), 
      color: '#e53e3e',
      icon: <CodeIcon />
    },
    { 
      title: 'Frontend', 
      skills: skills.filter(skill => frontendSkills.includes(skill.title)), 
      color: '#3182ce',
      icon: <CodeIcon />
    },
    { 
      title: 'Backend', 
      skills: skills.filter(skill => backendSkills.includes(skill.title)), 
      color: '#38a169',
      icon: <CodeIcon />
    },
    { 
      title: 'Cloud & DevOps', 
      skills: skills.filter(skill => cloudSkills.includes(skill.title)), 
      color: '#805ad5',
      icon: <CloudIcon />
    },
    { 
      title: 'Database', 
      skills: skills.filter(skill => databaseSkills.includes(skill.title)), 
      color: '#d69e2e',
      icon: <StorageIcon />
    },
    { 
      title: 'AI & ML', 
      skills: skills.filter(skill => mlSkills.includes(skill.title)), 
      color: '#00b5d8',
      icon: <PsychologyIcon />
    },
    { 
      title: 'AI Coding Tools', 
      skills: skills.filter(skill => aiToolsSkills.includes(skill.title)), 
      color: '#dd6b20',
      icon: <PsychologyIcon />
    },
  ].filter(category => category.skills.length > 0);

  return (
    <Box sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 700,
            mb: 1,
            color: 'primary.main',
          }}
        >
          Technical Skills
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          Technologies and tools I work with to build modern, scalable applications
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {skillCategories.map((category) => (
          <Grid item xs={12} sm={6} lg={4} key={category.title}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
                  '& .category-header': {
                    background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
                  },
                  '& .category-title': {
                    color: 'white',
                  },
                  '& .category-icon': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                  },
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${category.color}, ${category.color}cc)`,
                },
              }}
            >
              <Box
                className="category-header"
                sx={{
                  p: 2.5,
                  background: `linear-gradient(135deg, ${category.color}08, ${category.color}04)`,
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                }}
              >
                <Avatar
                  className="category-icon"
                  sx={{
                    width: 40,
                    height: 40,
                    background: category.color,
                    color: 'white',
                    mx: 'auto',
                    mb: 1.5,
                    transition: 'all 0.3s ease',
                    '& .MuiAvatar-fallback': {
                      fontSize: '1.2rem',
                    },
                  }}
                >
                  {category.icon}
                </Avatar>
                <Typography
                  className="category-title"
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    fontSize: '1.1rem',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {category.title}
                </Typography>
              </Box>

              <CardContent sx={{ p: 2.5, pt: 2 }}>
                <Box 
                  display="flex" 
                  flexWrap="wrap" 
                  gap={1}
                  sx={{
                    justifyContent: 'flex-start',
                  }}
                >
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill.title}
                      label={skill.title}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: `${category.color}30`,
                        color: category.color,
                        fontWeight: 500,
                        fontSize: '0.8rem',
                        height: 28,
                        '&:hover': {
                          backgroundColor: `${category.color}10`,
                          borderColor: category.color,
                          transform: 'scale(1.02)',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Compact All Skills Display */}
      <Box mt={4} textAlign="center">
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 2, 
            color: 'text.secondary',
            fontSize: '1.1rem',
            fontWeight: 500,
          }}
        >
          All Technologies
        </Typography>
        <Box 
          display="flex" 
          flexWrap="wrap" 
          justifyContent="center" 
          gap={1}
          sx={{
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          {skills.map((skill) => (
            <Chip
              key={skill.title}
              label={skill.title}
              size="small"
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                fontWeight: 500,
                fontSize: '0.8rem',
                height: 28,
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.2s ease',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
