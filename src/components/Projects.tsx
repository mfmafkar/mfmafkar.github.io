import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Box,
  Link,
  IconButton,
  CardActions,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Project from '../types/ProjectType';

type ProjectsProps = {
  projects: Project[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Box sx={{ py: 2 }}>
      <Box textAlign="center" mb={6}>
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <RocketLaunchIcon 
            sx={{ 
              fontSize: '3rem', 
              color: 'primary.main', 
              mr: 2,
              animation: 'bounce 2s infinite',
            }} 
          />
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3rem' },
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Featured Projects
          </Typography>
        </Box>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          A showcase of my recent work and technical achievements
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projects.map((project: Project, index: number) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                    '& .project-header': {
                      background: 'linear-gradient(135deg, #1a365d 0%, #2d5aa0 100%)',
                    },
                    '& .project-title': {
                      color: 'white',
                    },
                    '& .launch-icon': {
                      transform: 'scale(1.2) rotate(15deg)',
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #1a365d, #2d5aa0)',
                  },
                animation: `fadeInUp 0.6s ease-out ${0.2 * index}s both`,
              }}
            >
              <Box
                className="project-header"
                sx={{
                  p: 3,
                  background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
              >
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                  <Typography
                    className="project-title"
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      transition: 'color 0.3s ease',
                      flex: 1,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <IconButton
                    component={Link}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      ml: 2,
                      color: 'primary.main',
                      backgroundColor: 'rgba(49, 130, 206, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(49, 130, 206, 0.2)',
                      },
                    }}
                  >
                    <LaunchIcon 
                      className="launch-icon"
                      sx={{ 
                        fontSize: '1.2rem',
                        transition: 'transform 0.3s ease',
                      }} 
                    />
                  </IconButton>
                </Box>
              </Box>

              <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    mb: 3,
                    flexGrow: 1,
                  }}
                >
                  {project.description}
                </Typography>

                <Box>
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 2,
                    }}
                  >
                    Technologies Used
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {project.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'primary.light',
                          color: 'primary.main',
                          fontSize: '0.75rem',
                          height: 28,
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            color: 'white',
                            borderColor: 'primary.main',
                            transform: 'scale(1.05)',
                          },
                          transition: 'all 0.2s ease',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </CardContent>

              <CardActions sx={{ p: 3, pt: 0 }}>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'primary.main',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.dark',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <GitHubIcon sx={{ fontSize: '1rem', mr: 1 }} />
                  View on GitHub
                  <LaunchIcon sx={{ fontSize: '1rem', ml: 1 }} />
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Projects;
