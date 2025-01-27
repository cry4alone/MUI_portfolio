import React from 'react';
import { Container } from "@mui/material"
import AboutStart from '../components/AboutStart';
import AboutMe from '../components/AboutMe';

const AboutMePage = () => {
    

    return (
        <Container>
            <AboutStart />
            <AboutMe></AboutMe>
        </Container>
    );
};

export default AboutMePage;
