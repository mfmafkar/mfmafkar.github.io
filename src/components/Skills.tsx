import React from 'react';
import { Grid, Typography, Card, CardContent, Box, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import Skill from '../types/SkillType';

type SkillsProps = {
  skills: Skill[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Group skills by category for better organization based on actual experience
  const frontendSkills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Material UI', 'Apollo Client'];
  const backendSkills = ['Node.js', 'Python', 'Flask', 'Fastify', 'GraphQL'];
  const cloudSkills = ['AWS', 'AWS Lambda', 'AWS CDK', 'AWS Step Functions', 'AWS AppSync', 'Amazon S3', 'API Gateway', 'AWS SES', 'AWS Event Bridge', 'AWS SQS', 'Amazon OpenSearch', 'Serverless', 'Serverless Framework', 'Cloudflare Workers', 'Docker', 'GitLab CI', 'GitHub Actions'];
  const databaseSkills = ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Amazon DynamoDB', 'SQLite', 'MySQL', 'Firebase'];
  const mlSkills = ['TensorFlow', 'Keras', 'PlotyJS', 'LangChain', 'OpenAI', 'Sentence Transformers'];

  const skillCategories = [
    { title: 'Frontend', skills: skills.filter(skill => frontendSkills.includes(skill.title)), color: '#3182ce' },
    { title: 'Backend', skills: skills.filter(skill => backendSkills.includes(skill.title)), color: '#38a169' },
    { title: 'Cloud & DevOps', skills: skills.filter(skill => cloudSkills.includes(skill.title)), color: '#805ad5' },
    { title: 'Database', skills: skills.filter(skill => databaseSkills.includes(skill.title)), color: '#d69e2e' },
    { title: 'AI & Machine Learning', skills: skills.filter(skill => mlSkills.includes(skill.title)), color: '#00b5d8' },
  ].filter(category => category.skills.length > 0); // Only show categories that have skills

  return (
    <Box sx={{ py: 2 }}>
      <Box textAlign="center" mb={6}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '2.5rem', md: '3rem' },
            fontWeight: 700,
            mb: 2,
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
          }}
        >
          Technologies and tools I work with to build modern, scalable applications
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {skillCategories.map((category, categoryIndex) => (
          <Grid item xs={12} sm={6} lg={4} xl={3} key={category.title}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  '& .category-header': {
                    background: category.color,
                  },
                  '& .category-icon': {
                    transform: 'rotate(360deg)',
                  },
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${category.color}, ${category.color}cc)`,
                },
              }}
            >
              <Box
                className="category-header"
                sx={{
                  p: 3,
                  background: `linear-gradient(135deg, ${category.color}15, ${category.color}05)`,
                  transition: 'background 0.3s ease',
                }}
              >
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                  <Box
                    className="category-icon"
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${category.color}, ${category.color}cc)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <CodeIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    mb: 1,
                  }}
                >
                  {category.title}
                </Typography>
              </Box>

              <CardContent sx={{ p: 3, pt: 0 }}>
                <Box display="flex" flexDirection="column" gap={1.5}>
                  {category.skills.map((skill, skillIndex) => (
                    <Chip
                      key={skill.title}
                      label={skill.title}
                      variant="outlined"
                      sx={{
                        borderColor: `${category.color}40`,
                        color: category.color,
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        height: 36,
                        '&:hover': {
                          backgroundColor: `${category.color}10`,
                          borderColor: category.color,
                          transform: 'scale(1.05)',
                        },
                        transition: 'all 0.2s ease',
                        animation: `fadeInUp 0.6s ease-out ${0.1 * (categoryIndex * 4 + skillIndex)}s both`,
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* All Skills Display */}
      <Box mt={6} textAlign="center">
        <Typography variant="h6" sx={{ mb: 3, color: 'text.secondary' }}>
          All Technologies
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
          {skills.map((skill, index) => (
            <Chip
              key={skill.title}
              label={skill.title}
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
                animation: `fadeInUp 0.6s ease-out ${0.05 * index}s both`,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
