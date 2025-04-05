import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import { LocationOn, Restaurant } from '@mui/icons-material';

const DetailsSection = ({ weddingData }) => {
    return (
        <Box id="details" sx={{ bgcolor: '#f9f2dc', py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" gutterBottom align="center" sx={{ mb: 4, color: 'primary.main' }}>
                    Locații
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card
                            raised
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: 'white',
                                boxShadow: '0 0 10px rgba(107, 112, 84, 0.2)',
                            }}
                        >
                            <CardContent>
                                <Typography variant="h3" gutterBottom color="primary">
                                    <LocationOn color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
                                    Cununia religioasă
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    {weddingData.weddingLocation.name}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    {weddingData.weddingLocation.address}
                                </Typography>
                                <Box sx={{ width: '100%', height: '300px', overflow: 'hidden', mb: 2 }}>
                                    <iframe
                                        title="Wedding Location"
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        src={weddingData.weddingLocation.mapUrl}
                                        allowFullScreen
                                    ></iframe>
                                </Box>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={`https://maps.google.com/?q=${weddingData.weddingLocation.address}`}
                                    target="_blank"
                                >
                                    Get Directions
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card
                            raised
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: 'white',
                                boxShadow: '0 0 10px rgba(107, 112, 84, 0.2)',
                            }}
                        >
                            <CardContent>
                                <Typography variant="h3" gutterBottom color="primary">
                                    <Restaurant color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
                                    Recepția
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    {weddingData.receptionLocation.name}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    {weddingData.receptionLocation.address}
                                </Typography>
                                <Box sx={{ width: '100%', height: '300px', overflow: 'hidden', mb: 2 }}>
                                    <iframe
                                        title="Reception Location"
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        src={weddingData.receptionLocation.mapUrl}
                                        allowFullScreen
                                    ></iframe>
                                </Box>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={`https://maps.google.com/?q=${weddingData.receptionLocation.address}`}
                                    target="_blank"
                                >
                                    Get Directions
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DetailsSection;