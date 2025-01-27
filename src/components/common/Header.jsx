import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const Header = () => {
    return (
        <AppBar sx={{ backgroundColor: "primary.main" }} position='static'>
            <Toolbar>
                <GoogleIcon fontSize='large' sx={{ mr: 1 }}></GoogleIcon>
                <Typography variant='h6' component='span'>
                    Portfolio
                </Typography>
                {/*Добавить линк на страницу в каждый компонент*/}
                <Box sx={{flexGrow: 1, display: "flex", justifyContent: 'flex-end', gap: 5, mr: 6}}>
                    <Button sx={{ fontWeight: 'bold' }} variant="text" size="large" color='inherit'>Обо мне</Button>
                    <Button sx={{ fontWeight: 'bold' }} variant="text" size="large" color='inherit'>Проекты</Button>
                    <Button sx={{ fontWeight: 'bold' }} variant="text" size="large" color='inherit'>Контакты</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
