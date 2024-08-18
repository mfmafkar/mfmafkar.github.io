import React from 'react';
import { Card, CardContent, Typography, Grid, Chip, Box } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WorkExperienceType from '../types/WorkExperienceType';

interface WorkExperienceProps {
  experiences: WorkExperienceType[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Work Experience
      </Typography>
      <Grid container spacing={4}>
        {experiences.map((experience, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <WorkIcon />
                  <Typography variant="h5" component="div" sx={{ ml: 1 }}>
                    {experience.company}
                  </Typography>
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

export default WorkExperience;
