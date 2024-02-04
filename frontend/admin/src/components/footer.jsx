import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 3,
          backgroundColor: '#2f2f2f',
          color: '#ffffff',
        }}
      >
        <Typography variant="body2" align="center">
          © 2024 Your Company Name. All rights reserved.
        </Typography>
        <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" href="https://www.linkedin.com/" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com/" target="_blank">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="https://github.com/" target="_blank">
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
