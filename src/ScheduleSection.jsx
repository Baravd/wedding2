import React from 'react';
import {Box, createTheme, Grid, ThemeProvider, Typography} from '@mui/material';
import '@fontsource/playfair-display';
import CalendarPNG from './images/calendar.png';

const theme = createTheme({
    palette: {
        background: {
            default: '#6b7054',
        },
        text: {
            primary: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Playfair Display, serif',
    },
});

const ScheduleSection = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                id="schedule"
                sx={{
                    bgcolor: 'background.default',
                    py: 8,
                    px: {xs: 4, md: 12},
                    color: 'text.primary',
                }}
            >
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" sx={{fontWeight: 700}} gutterBottom>
                            PROGRAMUL
                        </Typography>
                        <Typography variant="subtitle2" sx={{mb: 4}}>
                            17 AUGUST 2025
                        </Typography>
                        <Box mb={3}>
                            <Typography variant="h4" sx={{fontWeight: 700}}>
                                14:00
                            </Typography>
                            <Typography variant="subtitle1" sx={{fontWeight: 700}}>
                                Cununia Religioasă
                            </Typography>
                            <Typography variant="body1">
                                Biserica Sf. Apostol Toma – Calea Dorobanților 102, Cluj-Napoca
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" sx={{fontWeight: 700}}>
                                16:00
                            </Typography>
                            <Typography variant="subtitle1" sx={{fontWeight: 700}}>
                                Petrecerea
                            </Typography>
                            <Typography variant="body1">
                                The Barn – Sat Gheorgheni, Județul Cluj
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} textAlign="center">
                        <Box
                            component="img"
                            src={CalendarPNG}
                            alt="Calendar"
                            sx={{
                                width: {xs: '80%', sm: '60%', md: '80%'},
                                maxWidth: 400,
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default ScheduleSection;