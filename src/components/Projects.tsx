import React from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import Project from '../types/ProjectType';

type ProjectsProps = {
  projects: Project[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Grid item xs={12} marginTop={4}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {/* Projects Cards */}
        {projects.map((project: Project, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Projects;
