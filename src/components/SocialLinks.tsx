import { Box, IconButton, Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const SocialLinks = () => {
  const socialLinks = [
    {
      label: 'GitHub',
      icon: <GitHubIcon />,
      href: 'https://github.com/mfmafkar',
      color: '#333',
    },
    {
      label: 'LinkedIn',
      icon: <LinkedInIcon />,
      href: 'https://www.linkedin.com/in/afkar-fasehudeen-9316b9160/',
      color: '#0077b5',
    },
    {
      label: 'Twitter',
      icon: <TwitterIcon />,
      href: 'https://twitter.com/mfmafkar',
      color: '#1da1f2',
    },
    {
      label: 'Email',
      icon: <EmailIcon />,
      href: 'mailto:mfmafkar@gmail.com',
      color: '#ea4335',
    },
  ];

  return (
    <Box 
      display="flex" 
      gap={2}
      sx={{
        '& .social-link': {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
        },
      }}
    >
      {socialLinks.map((link) => (
        <Tooltip key={link.label} title={link.label} arrow placement="top">
          <IconButton
            className="social-link"
            href={link.href}
            target={link.label !== 'Email' ? '_blank' : undefined}
            rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
            sx={{
              width: 56,
              height: 56,
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              color: 'white',
              fontSize: '1.5rem',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.3)',
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)',
                '&::before': {
                  opacity: 1,
                },
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${link.color}33, ${link.color}66)`,
                opacity: 0,
                transition: 'opacity 0.3s ease',
                borderRadius: 'inherit',
              },
              '& svg': {
                position: 'relative',
                zIndex: 1,
                transition: 'transform 0.3s ease',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
              },
              '&:hover svg': {
                transform: 'scale(1.1)',
              },
            }}
          >
            {link.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialLinks;
