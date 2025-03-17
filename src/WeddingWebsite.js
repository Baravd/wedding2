/* eslint-disable */
import React from 'react';
import {
    AppBar,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    IconButton,
    Link,
    Paper,
    ThemeProvider,
    Toolbar,
    Typography,
    createTheme
} from '@mui/material';
import {Menu as MenuIcon, Favorite, Schedule, LocationOn, Hotel, Restaurant} from '@mui/icons-material';

// Custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#6b7054', // Olive green
        },
        secondary: {
            main: '#7C8C65', // Lighter olive
        },
        background: {
            default: '#FFFFFF', // White
            paper: '#FAFAFA', // Very light gray (almost white)
        },
        text: {
            primary: '#6b7054', // Dark olive for text
            secondary: '#556B2F', // Olive for secondary text
        }
    },
    typography: {
        fontFamily: '"Playfair Display", "Roboto", "Arial", sans-serif',
        h1: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
        },
        h2: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
        },
        h3: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
        },
    },
});

// Sample data - replace with your information
const weddingData = {
    brideAndGroom: 'Catalina & Valentin',
    date: '17 August, 2025',
    weddingLocation: {
        name: 'Biserica Sf. Apostol Toma',
        address: 'Calea Dorobantilor 102 Cluj-Napoca',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.3889088231995!2d23.614411476141523!3d46.77694054490075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c172775e93d%3A0xdc44757297098edf!2sSt.%20Thomas%20Church!5e0!3m2!1sen!2sro!4v1742226029149!5m2!1sen!2sro',
    },
    receptionLocation: {
        name: 'The Barn',
        address: 'Sat Gheorgieni 530, Cluj 407272',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2736.4875629552744!2d23.734404676137387!3d46.69611395040655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47497315da6f0d79%3A0x715bcd0dee8505a2!2sThe%20Barn!5e0!3m2!1sen!2sro!4v1742225818765!5m2!1sen!2sro',
    },
    schedule: [
        {time: '14:00', event: 'Cununia religioasa'},
        {time: '16:00', event: 'Petrecerea'},
        {time: '23:00', event: 'Focul de artificii & Tort'},
    ],
    accommodations: [
        {name: 'Hotel Uba', address: 'Uba Calea Turzii 187, Cluj-Napoca 400491', phone: '0748 050 198'},
        {name: 'W San Francisco', address: '181 3rd St, San Francisco, CA 94103', phone: '(415) 777-5300'},
    ],
};

function WeddingWebsite() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{flexGrow: 1, bgcolor: 'background.default', minHeight: '100vh'}}>
                {/* Header */}
                <AppBar position="static" color="primary" elevation={0}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2, display: {sm: 'none'}}}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1, color: 'white'}}>
                            {weddingData.brideAndGroom}
                        </Typography>
                        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                            <Button color="inherit" href="#home" sx={{color: 'white'}}>Home</Button>
                            <Button color="inherit" href="#details" sx={{color: 'white'}}>Locatii</Button>
                            <Button color="inherit" href="#schedule" sx={{color: 'white'}}>Orar</Button>
                            <Button color="inherit" href="#accommodations" sx={{color: 'white'}}>Cazari</Button>
                        </Box>
                    </Toolbar>
                </AppBar>

                {/* Hero Section */}
                <Box
                    id="home"
                    sx={{
                        backgroundImage: 'url("https://source.unsplash.com/random/1600x900/?wedding")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '70vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        textAlign: 'center',
                        p: 4,
                    }}
                >
                    <Paper elevation={3} sx={{p: 4, bgcolor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2}}>
                        <Typography variant="h1" component="h1"
                                    sx={{fontSize: {xs: '2.5rem', md: '4rem'}, color: 'primary.main'}}>
                            {weddingData.brideAndGroom}
                        </Typography>
                        <Typography variant="h3" component="h2"
                                    sx={{mt: 2, fontSize: {xs: '1.5rem', md: '2rem'}, color: 'text.primary'}}>
                            <p>Impreună cu pãrintii: Camelia si Petruc Cotoc</p>
                            <p>Ana si Voicu Bara si nasii Xenia si Andrei Dascalu </p>
                            <p>Vă invităm să ne fiti alături la celebrarea căsătoriei! </p>
                        </Typography>
                        <Typography variant="h3" component="h2"
                                    sx={{mt: 2, fontSize: {xs: '1.5rem', md: '2rem'}, color: 'primary.main'}}>
                            {weddingData.date}
                        </Typography>
                    </Paper>
                </Box>

                {/* Details Section */}
                <Container maxWidth="lg" sx={{py: 8}} id="details">
                    <Typography variant="h2" gutterBottom align="center" sx={{mb: 4, color: 'primary.main'}}>
                        Wedding Details
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Card raised sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: 'background.paper'
                            }}>
                                <CardContent>
                                    <Typography variant="h3" gutterBottom color="primary">
                                        <LocationOn color="primary" sx={{mr: 1, verticalAlign: 'middle'}}/>
                                        Ceremony
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        {weddingData.weddingLocation.name}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" paragraph>
                                        {weddingData.weddingLocation.address}
                                    </Typography>
                                    <Box sx={{width: '100%', height: '300px', overflow: 'hidden', mb: 2}}>
                                        <iframe
                                            title="Wedding Location"
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            src={weddingData.weddingLocation.mapUrl}
                                            allowFullScreen
                                        ></iframe>
                                    </Box>
                                    <Button variant="contained" color="primary"
                                            href={`https://maps.google.com/?q=${weddingData.weddingLocation.address}`}
                                            target="_blank">
                                        Get Directions
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card raised sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: 'background.paper'
                            }}>
                                <CardContent>
                                    <Typography variant="h3" gutterBottom color="primary">
                                        <Restaurant color="primary" sx={{mr: 1, verticalAlign: 'middle'}}/>
                                        Reception
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        {weddingData.receptionLocation.name}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" paragraph>
                                        {weddingData.receptionLocation.address}
                                    </Typography>
                                    <Box sx={{width: '100%', height: '300px', overflow: 'hidden', mb: 2}}>
                                        <iframe
                                            title="Reception Location"
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            src={weddingData.receptionLocation.mapUrl}
                                            allowFullScreen
                                        ></iframe>
                                    </Box>
                                    <Button variant="contained" color="primary"
                                            href={`https://maps.google.com/?q=${weddingData.receptionLocation.address}`}
                                            target="_blank">
                                        Get Directions
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>

                {/* Schedule Section */}
                <Box sx={{bgcolor: 'rgba(85, 107, 47, 0.1)', py: 8}} id="schedule">
                    <Container maxWidth="md">
                        <Typography variant="h2" gutterBottom align="center" sx={{mb: 4, color: 'primary.main'}}>
                            <Schedule color="primary" sx={{mr: 1, verticalAlign: 'middle'}}/>
                            Schedule
                        </Typography>
                        <Paper elevation={3} sx={{p: 4, bgcolor: 'white'}}>
                            {weddingData.schedule.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Grid container spacing={2} sx={{py: 2}}>
                                        <Grid item xs={4} sm={3}>
                                            <Typography variant="h6" color="primary">{item.time}</Typography>
                                        </Grid>
                                        <Grid item xs={8} sm={9}>
                                            <Typography variant="h6">{item.event}</Typography>
                                        </Grid>
                                    </Grid>
                                    {index < weddingData.schedule.length - 1 &&
                                        <Divider sx={{bgcolor: 'rgba(85, 107, 47, 0.2)'}}/>}
                                </React.Fragment>
                            ))}
                        </Paper>
                    </Container>
                </Box>

                {/* Accommodations Section */}
                <Container maxWidth="md" sx={{py: 8}} id="accommodations">
                    <Typography variant="h2" gutterBottom align="center" sx={{mb: 4, color: 'primary.main'}}>
                        <Hotel color="primary" sx={{mr: 1, verticalAlign: 'middle'}}/>
                        Cazari
                    </Typography>
                    <Grid container spacing={4}>
                        {weddingData.accommodations.map((hotel, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Card raised sx={{bgcolor: 'background.paper'}}>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>{hotel.name}</Typography>
                                        <Typography variant="body1" paragraph>{hotel.address}</Typography>
                                        <Typography variant="body1" paragraph>{hotel.phone}</Typography>
                                        <Button variant="outlined" color="primary"
                                                href={`https://maps.google.com/?q=${hotel.address}`} target="_blank">
                                            View on Map
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Footer */}
                <Box sx={{bgcolor: 'primary.main', color: 'white', py: 4, textAlign: 'center'}}>
                    <Container maxWidth="lg">
                        <Typography variant="h6" gutterBottom>
                            {weddingData.brideAndGroom}
                        </Typography>
                        <Typography variant="body1">
                            We look forward to celebrating with you on {weddingData.date}
                        </Typography>
                        <Typography variant="body2" sx={{mt: 2}}>
                            © {new Date().getFullYear()} • Made with <Favorite
                            sx={{fontSize: '0.8rem', verticalAlign: 'middle'}}/> for our special day
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default WeddingWebsite;