import React from 'react';
import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialMediaLinks = () => {
    return (
        <Box display="flex" justifyContent="center" gap={2}>
            <IconButton
                color="primary"
                aria-label="Instagram"
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon />
            </IconButton>
            <IconButton
                color="primary"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/yaroslava-mishchenko-01373127a/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedInIcon />
            </IconButton>
            <IconButton
                color="primary"
                aria-label="GitHub"
                href="https://github.com/yaroslavami"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHubIcon />
            </IconButton>
        </Box>
        
    );
    
};

export default SocialMediaLinks;
