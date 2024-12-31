import React from 'react';
import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialMediaLinks = () => {
    return (
        <Box display="flex"  gap={2}>
            <IconButton
                sx={{ color: 'white'}}
                aria-label="Instagram"
                href="https://www.instagram.com/yaroslava_webdev/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon />
            </IconButton>
            <IconButton
                sx={{ color: 'white'}}
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/yaroslava-mishchenko-01373127a/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedInIcon />
            </IconButton>
            <IconButton
                sx={{ color: 'white'}}
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
