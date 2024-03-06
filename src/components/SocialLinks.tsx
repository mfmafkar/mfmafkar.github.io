import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const SocialLinks = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box>
        {/* Social Media Icons */}
        <IconButton
          aria-label="GitHub"
          href="https://github.com/mfmafkar"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/afkar-fasehudeen-9316b9160/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="Twitter"
          href="https://twitter.com/mfmafkar"
          target="_blank"
        >
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default SocialLinks;
