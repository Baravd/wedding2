import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import { Favorite } from '@mui/icons-material';

const FooterSection = () => {
    return (
        <Box sx={{ mt: 0, color: 'white', bgcolor: '#6b7054' }}>
            <Box sx={{ borderTop: '1px solid white', pt: 6, mt: 0 }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={6} md={3} textAlign="center">
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>CĂTĂLINA</Typography>
                        <Link href="tel:0748654821" underline="hover" color="inherit">
                            <Typography variant="body1">0748 654 821</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={3} textAlign="center">
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>VALENTIN</Typography>
                        <Link href="tel:0748857902" underline="hover" color="inherit">
                            <Typography variant="body1">0748 857 902</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={3} textAlign="center">
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>CAMELIA COTOC</Typography>
                        <Link href="tel:0744106580" underline="hover" color="inherit">
                            <Typography variant="body1">0744 106 580</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={3} textAlign="center">
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>ANA BARA</Typography>
                        <Link href="tel:0740089823" underline="hover" color="inherit">
                            <Typography variant="body1">0740 089 823</Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Typography variant="body2" align="center" sx={{ mt: 4, pb: 2 }}>
                    © {new Date().getFullYear()} • Made with <Favorite sx={{ fontSize: '0.8rem', verticalAlign: 'middle' }} /> for our special day
                </Typography>
            </Box>
        </Box>
    );
};

export default FooterSection;
