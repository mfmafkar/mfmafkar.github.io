import { Grid, Typography, Button, Card, CardContent } from '@mui/material';

const Home = () => {
  const skills = [
    { title: 'JavaScript', description: 'Proficient in modern JS frameworks' },
    { title: 'React', description: 'Experience in building SPA with React' },
    { title: 'Node.js', description: 'Backend development using Node.js' },
    {
      title: 'HTML/CSS',
      description: 'Solid understanding of web fundamentals',
    },
  ];

  const projects = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
    { title: 'Project 3', description: 'Description of Project 3' },
  ];

  const handleContactClick = () => {
    window.location.href = 'mailto:mfmafkar@gmail.com';
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          Afkar Fasehudeen - Software Engineer
        </Typography>
        <Typography variant="body1" paragraph>
          Hello! I'm a full-stack developer passionate about building scalable,
          performance-oriented cloud applications and infrastructure. I believe
          in continuous learning and failing fast which has helped me quickly
          adapt to new technologies and engineering environments. Having over 3
          years of experience in the design and development of cloud solutions
          together with a strong passion to learn helps me in driving ideas from
          discovery, to design, development, and finally production. Having
          worked with agile software teams I am both results-oriented and
          delivery minded.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleContactClick}
        >
          Contact Me
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{skill.title}</Typography>
                  <Typography variant="body2">{skill.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
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
    </Grid>
  );
};

export default Home;
