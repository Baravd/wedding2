import React from 'react';
import { Box, Typography, ThemeProvider, createTheme, Grid, Divider } from '@mui/material';
import '@fontsource/playfair-display';
import ToastPNG from './images/toast.png';

const theme = createTheme({
    palette: {
        text: {
            primary: '#5a422e',
        },
    },
    typography: {
        fontFamily: 'Playfair Display, serif',
    },
});

const InfoSection = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box id="info" sx={{ bgcolor: '#f9f2dc', py: 8, px: { xs: 4, md: 12 }, color: 'text.primary' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4} textAlign="center">
                        <Typography variant="h3" sx={{ fontWeight: 700 }}>
                            INFORMATII
                        </Typography>
                        <Box
                            component="img"
                            src={ToastPNG}
                            alt="Toast Icon"
                            sx={{ width: 200, mt: 3, py: 6 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        {/* Dress Code */}
                        <Box mb={4}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>DRESS CODE</Typography>
                            <Typography variant="body1" paragraph>
                                Ne dorim să vă simțiți bine, să vă bucurați de atmosferă și să dansați până la finalul evenimentului! Așa că… <strong>feel free to wear what you like</strong>, cât timp vă simțiți confortabil(ă) și cu chef de petrecere!
                            </Typography>
                            <Typography variant="body1">
                                <strong>Totuși, păstrăm o notă elegantă – it's a wedding after all!</strong> Așa că vă încurajăm să adăugați un strop de rafinament ținutei voastre. Think: classy but comfy.
                            </Typography>
                        </Box>

                        <Divider sx={{ borderColor: 'text.primary', mb: 4 }} />

                        {/* Transport */}
                        <Box mb={4}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>TRANSPORT</Typography>
                            <Typography variant="body1" paragraph>
                                Pentru deplasarea dintre Cununia Religioasă și Petrecere, vă recomandăm cu drag să folosiți aplicațiile <strong>Bolt</strong> sau <strong>Uber</strong>. Sunt cele mai comode variante, mai ales dacă vreți să lăsați deoparte grija parcării sau întrebarea clasică „Cine conduce înapoi la cazare?”
                            </Typography>
                            <Typography variant="body1">
                                Așa, toată lumea se poate bucura liniștită de un pahar de prosecco… și de ce nu, de multe cocktailuri delicioase!
                            </Typography>
                        </Box>

                        <Divider sx={{ borderColor: 'text.primary', mb: 4 }} />

                        {/* Duration */}
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>DURATĂ EVENIMENT</Typography>
                            <Typography variant="body1">
                                Petrecerea începe la ora 16:00 și se încheie în jurul orei 01:00 AM. <br />
                                Avem <strong>9 ore</strong> la dispoziție să râdem, să dansăm și să ne bucurăm împreună de o seară pe care ne-o dorim de neuitat!
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default InfoSection;