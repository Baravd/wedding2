import React from 'react';
import {Box, Typography} from '@mui/material';
import Poza1 from './images/poza1.JPG';

const IntroSection = () => {
    return (
        <Box
            id="intro"
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                bgcolor: '#6B7054',
                color: 'white',
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    pl: { xs: 4, md: 8 },
                    pr: 4,
                    py: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h3"
                            sx={{fontFamily: 'Playfair Display', mb: 2, textAlign: {xs: 'center', md: 'left'}}}>
                    A PROMISE FOR LIFE
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.2rem',
                        textAlign: { xs: 'center', md: 'left' },
                        wordBreak: 'break-word',
                        maxWidth: {md: '80%'},
                        minHeight: {md: '6.6em'}, // enough space for ~3 lines of text
                    }}
                >
                    Împreună cu părinții Camelia și Petru Cotoc, Ana și Voicu Bara și nașii Xenia și Andrei Dascălu, vă
                    invităm să ne fiți alături la <strong>Celebraraea Căsătoriei!</strong>
                </Typography>
                <Typography variant="h4" sx={{mt: 3, textAlign: {xs: 'center', md: 'left'}}}>
                    <strong>17.08.2025</strong>
                </Typography>
            </Box>
            <Box sx={{flex: 1}}>
                <img
                    src={Poza1}
                    alt="Couple"
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
            </Box>
        </Box>
    );
};

export default IntroSection;
