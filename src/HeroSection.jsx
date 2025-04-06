import React from 'react';
import { Box, Typography, ThemeProvider, createTheme } from '@mui/material';
import '@fontsource/dancing-script';
import '@fontsource/playfair-display';
import Poza3 from './images/poza3.JPG'; // Updated import name and file

const theme = createTheme({
    palette: {
        text: {
            primary: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Playfair Display, serif',
        h1: {
            fontFamily: 'Dancing Script, cursive',
            fontWeight: 400,
            fontSize: '4rem',
        },
        h2: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 400,
            fontSize: '2rem',
        },
    },
});

const HeroSection = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box id={'home'}
                 sx={{
                     backgroundImage: `url(${Poza3})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     height: '100vh',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: { xs: 'flex-start', md: 'center' },
                     alignItems: 'center',
                     textAlign: 'center',
                     color: 'text.primary',
                     px: 2,
                     pt: { xs: '22vh', md: 0 },
                     textShadow: '0 2px 6px rgba(0,0,0,0.6)',
                     position: 'relative',
                 }}

            >
                <Typography variant="h1">Cătălina & Valentin</Typography>
                <Typography variant="h2" sx={{ mt: 2 }}>17•08•2025</Typography>

                {/* Scroll Arrow */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: { xs: '32vh', md: '10vh' },
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '2rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        animation: 'bounce 2s infinite',
                    }}
                >
                    ↓
                </Box>


                {/* Bounce keyframes */}
                <style>
                    {`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% {
                transform: translateX(-50%) translateY(0);
              }
              40% {
                transform: translateX(-50%) translateY(-8px);
              }
              60% {
                transform: translateX(-50%) translateY(-4px);
              }
            }
          `}
                </style>
            </Box>
        </ThemeProvider>
    );
};

export default HeroSection;
