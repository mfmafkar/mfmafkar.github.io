import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Box,
  Link,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ProfessionalExperienceType from '../types/ProfessionalExperienceType';

interface ProfessionalExperienceProps {
  experiences: ProfessionalExperienceType[];
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({
  experiences,
}) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Professional Experience
      </Typography>
      <Grid container spacing={4}>
        {experiences.map((experience, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <WorkIcon />
                  {/*  */}
                  <Link
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: 'none' }}
                  >
                    <Typography variant="h5" component="div" sx={{ ml: 1 }}>
                      {experience.company}
                    </Typography>
                  </Link>
                </Box>
                <Typography variant="subtitle1" color="text.secondary">
                  {experience.role}
                </Typography>
                <Box display="flex" alignItems="center" mt={1} mb={2}>
                  <CalendarTodayIcon color="action" />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    {experience.tenure}
                  </Typography>
                </Box>
                <Typography variant="body1" component="div">
                  {experience.description}
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ mt: 2, fontWeight: 'bold' }}
                >
                  Technologies:
                </Typography>
                <Box display="flex" flexWrap="wrap" mt={1}>
                  {experience.technologies.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      variant="outlined"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
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
