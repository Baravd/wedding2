import React from 'react';
import {Box, Container, Typography} from '@mui/material';
import Poza2 from './images/poza2.JPG'; // Updated import name and file

const RSVPSection = () => {
    return (
        <Box id="rsvp" sx={{bgcolor: '#6b7054', pt: 10, pb: 6, color: 'white', textAlign: 'center'}}>
            <Container maxWidth="md">
                <Typography variant="h3" sx={{fontFamily: 'Playfair Display', mb: 1}}>
                    WE CAN'T WAIT
                </Typography>
                <Typography variant="h5" sx={{fontStyle: 'italic', mb: 4}}>
                    to hear from you
                </Typography>
                <Box
                    component="img"
                    src={Poza2}
                    alt="Couple RSVP"
                    sx={{width: '100%', maxWidth: 400, mx: 'auto', borderRadius: 2, mb: 6}}
                />
                <Typography variant="subtitle1" sx={{fontSize: '1rem', letterSpacing: 1}}>
                    VĂ RUGĂM SĂ CONFIRMAȚI PREZENȚA PÂNĂ LA
                </Typography>
                <Typography variant="h6" sx={{fontWeight: 'bold', mb: 6}}>
                    DATA DE 15 IULIE 2025
                </Typography>
            </Container>
        </Box>
    );
};

export default RSVPSection;
