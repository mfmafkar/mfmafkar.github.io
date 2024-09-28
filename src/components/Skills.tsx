import React from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import Skill from '../types/SkillType';

type SkillsProps = {
  skills: Skill[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Grid item xs={12} marginBottom={4} marginTop={4}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2}>
        {/* Skills Cards */}
        {skills.map((skill: Skill, index: number) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{skill.title}</Typography>
                {/* <Typography variant="body2">{skill.description}</Typography> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Skills;
