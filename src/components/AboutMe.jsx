import React from 'react';
import { Box, Typography, Card, CardContent, Grid, useTheme } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const AboutMe = () => {
    const Theme = useTheme();

    const cardsData = [
        {
            icon: <DeveloperModeIcon sx={{ color: '#f5f5f5' }} fontSize='large' />,
            text: 'Я начинающий WEB разработчик и сейчас я активно изучаю React.',
        },
        {
            icon: <SportsBasketballIcon sx={{ color: '#f5f5f5' }} fontSize='large' />,
            text: 'Я люблю спорт, а в частности баскетбол.',
        },
        {
            icon: <SportsEsportsIcon sx={{ color: '#f5f5f5' }} fontSize='large' />,
            text: 'И конечно же мне нравится играть в DOTA 2.',
        },
        {
            icon: <SportsBasketballIcon sx={{ color: '#f5f5f5' }} fontSize='large' />,
            text: 'Я люблю спорт, а в частности баскетбол.',
        },
        {
            icon: <SportsBasketballIcon sx={{ color: '#f5f5f5' }} fontSize='large' />,
            text: 'Я люблю спорт, а в частности баскетбол.',
        },
        {
            icon: <SportsBasketballIcon sx={{ color: '#f5f5f5' }} fontSize='large' />,
            text: 'Я люблю спорт, а в частности баскетбол.',
        },
    ];

    return (
        <Box>
            <Typography variant='h2'>Коротко обо мне</Typography>
            <Grid container spacing={4} mt={2}>
                {cardsData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                                background: `linear-gradient(to right, ${Theme.palette.primary.light}, ${Theme.palette.secondary.light})`,
                            }}
                        >
                            <CardContent sx={{ textAlign: 'center' }}>
                                {card.icon}
                                <Typography color='#f5f5f5' variant='body1' variant='h6'>
                                    {card.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AboutMe;
