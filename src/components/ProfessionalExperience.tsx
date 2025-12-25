import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Box,
  Link,
  Avatar,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ProfessionalExperienceType from '../types/ProfessionalExperienceType';

interface ProfessionalExperienceProps {
  experiences: ProfessionalExperienceType[];
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({
  experiences,
}) => {
  return (
    <Box sx={{ py: 2 }}>
      <Box textAlign="center" mb={6}>
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <TrendingUpIcon 
            sx={{ 
              fontSize: '3rem', 
              color: 'primary.main', 
              mr: 2,
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
            Professional Journey
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
           My professional journey and work experience
         </Typography>
      </Box>

      <Grid container spacing={4}>
        {experiences.map((experience, index) => (
          <Grid key={index} size={{ xs: 12, lg: 4 }}>
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
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                    '& .experience-header': {
                      background: 'linear-gradient(135deg, #1a365d 0%, #2d5aa0 100%)',
                    },
                    '& .company-name': {
                      color: 'white',
                    },
                    '& .role-title': {
                      color: 'rgba(255, 255, 255, 0.9)',
                    },
                    '& .timeline-dot': {
                      transform: 'scale(1.2)',
                    },
                    '& .tenure-period': {
                      color: 'white !important',
                    },
                    '& .tenure-icon': {
                      color: 'white !important',
                    },
                  },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: index === 0 
                    ? 'linear-gradient(90deg, #38a169, #68d391)' 
                    : 'linear-gradient(90deg, #3182ce, #63b3ed)',
                },
                animation: `fadeInUp 0.6s ease-out ${0.2 * index}s both`,
              }}
            >
              <Box
                className="experience-header"
                sx={{
                  p: 3,
                  background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
              >
                <Box display="flex" alignItems="flex-start" mb={2}>
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'primary.main',
                      mr: 2,
                      transition: 'transform 0.3s ease',
                    }}
                    className="timeline-dot"
                  >
                    {index === 0 ? <WorkIcon /> : <BusinessIcon />}
                  </Avatar>
                  
                  <Box flex={1}>
                    <Typography
                      className="company-name"
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        transition: 'color 0.3s ease',
                        mb: 0.5,
                      }}
                    >
                      {experience.link ? (
                        <Link
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            textDecoration: 'none', 
                            color: 'inherit',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          {experience.company}
                        </Link>
                      ) : (
                        experience.company
                      )}
                    </Typography>
                    
                    <Typography
                      className="role-title"
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        color: 'text.primary',
                        transition: 'color 0.3s ease',
                        fontSize: '1.1rem',
                      }}
                    >
                      {experience.role}
                    </Typography>
                  </Box>

                  {index === 0 && (
                    <Chip
                      label="Current"
                      size="small"
                      sx={{
                        backgroundColor: '#38a169',
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '0.75rem',
                      }}
                    />
                  )}
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                  <CalendarTodayIcon 
                    className="tenure-icon"
                    sx={{ 
                      fontSize: '1rem', 
                      color: 'primary.main',
                      transition: 'color 0.3s ease',
                    }} 
                  />
                  <Typography
                    className="tenure-period"
                    variant="body2"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {experience.tenure}
                  </Typography>
                </Box>
              </Box>

              <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {experience.description && (
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {experience.description}
                  </Typography>
                )}

                <Box mt="auto">
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 2,
                    }}
                  >
                    Technologies & Tools
                  </Typography>
                  
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {experience.technologies.map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProfessionalExperience;
