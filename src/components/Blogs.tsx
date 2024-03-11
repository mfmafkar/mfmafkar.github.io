import React from 'react';
import { Grid, Typography, Card, CardContent, Link } from '@mui/material';
import Blog from '../types/BlogType';

type BlogsProps = {
  blogs: Blog[];
};

const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
  return (
    <Grid item xs={12} marginTop={4}>
      <Typography variant="h4" gutterBottom>
        Blogs
      </Typography>
      <Grid container spacing={2}>
        {/* Blogs Cards */}
        {blogs.map((blog: Blog, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{blog.title}</Typography>
                <Typography variant="body2">{blog.description}</Typography>

                <Link
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: 'none' }}
                >
                  Read more
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Blogs;
