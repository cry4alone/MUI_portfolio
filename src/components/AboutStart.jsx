import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import myImage from '../assets/about.jpg';
import jsLogo from '../assets/logo-javascript.svg';
import reactLogo from '../assets/react-2.svg';
import muiLogo from '../assets/material-ui-1.svg';

const AboutStart = () => {
    const technologies = [{ src: reactLogo }, { src: muiLogo }, { src: jsLogo }];
    return (
        <Box sx={{ display: 'flex', gap: 3, my: 4, alignItems: 'stretch' }}>
            {/* Левая часть: изображение */}
            <Box
                sx={{
                    width: 400,
                    height: 'auto',
                    borderRadius: 2,
                    flexShrink: 0, // Запретить уменьшение ширины изображения
                }}
                component='img'
                src={myImage}
                alt='Моё фото'
            />

            {/* Правая часть: текстовые блоки */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
                {/* Первый блок */}
                <Paper elevation={5} sx={{ p: 3, border: '3px solid', borderRadius: 2, flex: 1 }}>
                    <Typography variant='h3'>
                        Привет!
                        <br />Я{' '}
                        <Typography variant='inherit' component='span' sx={{ color: 'primary.main' }}>
                            Андрей
                        </Typography>
                        , и я разработал этот сайт!
                    </Typography>
                </Paper>

                {/* Второй блок */}
                <Paper elevation={5} sx={{ p: 3, border: '3px solid', borderRadius: 2, flex: 1 }}>
                    <Typography variant='h4' gutterBottom>
                        Технологии, используемые в проекте
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
                        {technologies.map((tech, index) => (
                            <Box
                                component='img'
                                src={tech.src}
                                alt={tech.alt}
                                key={index}
                                sx={{
                                    width: 100,
                                    height: 'auto',
                                    borderRadius: 2,
                                    filter: 'grayscale(100%)',
                                    transition: 'filter 0.3s ease',
                                    '&:hover': {
                                        filter: 'grayscale(0%)',
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

export default AboutStart;
