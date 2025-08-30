import React from 'react';
import { Grid, Typography, Card, CardContent, Link, Box, Chip, IconButton } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import LaunchIcon from '@mui/icons-material/Launch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Blog from '../types/BlogType';

type BlogsProps = {
  blogs: Blog[];
};

const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
  return (
    <Box sx={{ py: 2 }}>
      <Box textAlign="center" mb={6}>
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <ArticleIcon 
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
            Latest Articles
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
          Sharing knowledge and insights from my technical journey
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {blogs.map((blog: Blog, index: number) => (
          <Grid item xs={12} md={4} key={index}>
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
                    '& .blog-header': {
                      background: 'linear-gradient(135deg, #1a365d 0%, #2d5aa0 100%)',
                    },
                    '& .blog-title': {
                      color: 'white',
                    },
                    '& .read-more-link': {
                      transform: 'translateX(8px)',
                    },
                  },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #38a169, #68d391)',
                },
                animation: `fadeInUp 0.6s ease-out ${0.2 * index}s both`,
              }}
            >
              <Box
                className="blog-header"
                sx={{
                  p: 3,
                  background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
              >
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                  <Typography
                    className="blog-title"
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      transition: 'color 0.3s ease',
                      flex: 1,
                      lineHeight: 1.3,
                    }}
                  >
                    {blog.title}
                  </Typography>
                  <IconButton
                    component={Link}
                    href={blog.link}
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
                    <LaunchIcon sx={{ fontSize: '1.2rem' }} />
                  </IconButton>
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                  <Chip
                    icon={<AccessTimeIcon sx={{ fontSize: '0.8rem' }} />}
                    label="Medium Article"
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(56, 161, 105, 0.1)',
                      color: '#38a169',
                      borderRadius: 2,
                      fontWeight: 500,
                      fontSize: '0.75rem',
                    }}
                  />
                </Box>
              </Box>

              <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    flexGrow: 1,
                    mb: 3,
                  }}
                >
                  {blog.description}
                </Typography>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Link
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-link"
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
                      },
                    }}
                  >
                    <span style={{ transition: 'transform 0.2s ease' }}>
                      Read Article
                    </span>
                    <LaunchIcon sx={{ fontSize: '1rem', ml: 1, transition: 'transform 0.2s ease' }} />
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={6} textAlign="center">
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
          Want to read more of my articles?
        </Typography>
        <Link
          href="https://medium.com/@mfmafkar"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            px: 4,
            py: 2,
            backgroundColor: 'primary.main',
            color: 'white',
            textDecoration: 'none',
            borderRadius: 2,
            fontWeight: 500,
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: 'primary.dark',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 20px rgba(49, 130, 206, 0.4)',
            },
          }}
        >
          Visit My Medium Profile
          <LaunchIcon sx={{ fontSize: '1rem', ml: 1 }} />
        </Link>
      </Box>
    </Box>
  );
};

export default Blogs;
