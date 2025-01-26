import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{ bgcolor: 'primary.main', display: 'flex', justifyContent: 'center', width: '100%', py: 5 }}
            component='footer'
        >
            <Typography>
                {' '}
                © All rights reserved. {new Date().getFullYear()}
                <br />
                Designed and developed by Andrei Chernenko
            </Typography>
        </Box>
    );
};

export default Footer;
