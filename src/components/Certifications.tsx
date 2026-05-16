import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Link,
  Divider,
} from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VerifiedIcon from '@mui/icons-material/Verified';
import CertificationType from '../types/CertificationType';

interface CertificationsProps {
  certifications: CertificationType[];
}

const categoryColors: Record<CertificationType['category'], string> = {
  Cloud: '#805ad5',
  Frontend: '#3182ce',
  Backend: '#38a169',
  'AI/ML': '#00b5d8',
  DevOps: '#d69e2e',
  Other: '#718096',
};

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  const formalCerts = certifications.filter((c) => c.type === 'Certification');
  const courses = certifications.filter((c) => c.type === 'Course');

  return (
    <Box sx={{ py: 4 }}>
      <Box textAlign="center" mb={5}>
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <WorkspacePremiumIcon sx={{ fontSize: '3rem', color: 'primary.main', mr: 2 }} />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Learning & Certifications
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          Credentials and courses that reflect my skillset
        </Typography>
      </Box>

      {/* Formal Certifications */}
      <Box mb={5}>
        <Box display="flex" alignItems="center" gap={1} mb={3}>
          <VerifiedIcon sx={{ color: 'primary.main' }} />
          <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
            Certifications
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {formalCerts.map((cert, idx) => {
            const color = categoryColors[cert.category];
            return (
              <Grid key={idx} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                    border: '1px solid #e2e8f0',
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, ${color}, ${color}cc)`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 2.5 }}>
                    <Box mb={1}>
                      <Chip
                        label={cert.category}
                        size="small"
                        sx={{
                          height: 22,
                          fontSize: '0.7rem',
                          backgroundColor: `${color}15`,
                          color: color,
                          fontWeight: 600,
                        }}
                      />
                    </Box>

                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.4, mt: 1.5, mb: 0.5 }}
                    >
                      {cert.title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      {cert.issuer}
                    </Typography>

                    {cert.link && (
                      <Link
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          color: color,
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' },
                        }}
                      >
                        View Credential
                        <OpenInNewIcon sx={{ fontSize: '0.75rem' }} />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Divider sx={{ mb: 5 }} />

      {/* Professional Development */}
      <Box>
        <Box display="flex" alignItems="center" gap={1} mb={3}>
          <MenuBookIcon sx={{ color: 'primary.main' }} />
          <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
            Professional Development
          </Typography>
        </Box>

        <Box display="flex" flexWrap="wrap" gap={1.5}>
          {courses.map((course, idx) => {
            const color = categoryColors[course.category];
            return (
              <Chip
                key={idx}
                label={`${course.title} — ${course.issuer}`}
                variant="outlined"
                sx={{
                  height: 36,
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  borderColor: `${color}40`,
                  color: 'text.primary',
                  backgroundColor: `${color}08`,
                  borderRadius: 2,
                  px: 0.5,
                  '&:hover': {
                    backgroundColor: `${color}15`,
                    borderColor: color,
                  },
                  transition: 'all 0.2s ease',
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Certifications;
