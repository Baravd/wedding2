/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {AppBar, Box, Button, createTheme, IconButton, ThemeProvider, Toolbar, Typography} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import ScheduleSection from "./ScheduleSection";
import WeddingDrawer from "./WeddingDrawer";
import DetailsSection from "./DetailsSection";
import RSVPSection from "./RSVPSection";
import FooterSection from "./FooterSection";
import IntroSection from "./IntroSection";


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
        address: 'Calea Dorobanților 102 Cluj-Napoca',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.3889088231995!2d23.614411476141523!3d46.77694054490075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c172775e93d%3A0xdc44757297098edf!2sSt.%20Thomas%20Church!5e0!3m2!1sen!2sro!4v1742226029149!5m2!1sen!2sro',
    },
    receptionLocation: {
        name: 'The Barn',
        address: 'Sat Gheorgheni 530, Cluj 407272',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2736.4875629552744!2d23.734404676137387!3d46.69611395040655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47497315da6f0d79%3A0x715bcd0dee8505a2!2sThe%20Barn!5e0!3m2!1sen!2sro!4v1747400327788!5m2!1sen!2sro',
    },
    schedule: [
        {time: '14:00', event: 'Cununia religioasa'},
        {time: '16:00', event: 'Petrecerea'},
        {time: '23:00', event: 'Focul de artificii & Tort'},
    ],

};

function WeddingWebsite() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setMobileMenuOpen(open);
    };

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowMenu(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <Box sx={{flexGrow: 1, bgcolor: 'background.default', minHeight: '100vh'}}>
                {/* Header */}
                {showMenu && (
                    <AppBar
                        position="fixed"
                        color="transparent"
                        elevation={0}
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: showMenu ? 1 : 0,
                        }}
                    >
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{mr: 2, display: {sm: 'none'}}}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon/>
                            </IconButton>

                            <Typography variant="h6" component="div" sx={{flexGrow: 1, color: 'white'}}>
                                {weddingData.brideAndGroom}
                            </Typography>
                            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                                <Button color="inherit" href="#home" sx={{color: 'white'}}>Home</Button>
                                <Button color="inherit" href="#intro" sx={{color: 'white'}}>Intro</Button>
                                <Button color="inherit" href="#details" sx={{color: 'white'}}>Locații</Button>
                                <Button color="inherit" href="#schedule" sx={{color: 'white'}}>Program</Button>
                                <Button color="inherit" href="#info" sx={{color: 'white'}}>Informații</Button>
                                <Button color="inherit" href="#rsvp" sx={{color: 'white'}}>Confirmări</Button>
                                {/*<Button color="inherit" href="#accommodations" sx={{color: 'white'}}>Cazari</Button>*/}
                            </Box>
                        </Toolbar>
                    </AppBar>
                )}
                <WeddingDrawer open={mobileMenuOpen} onClose={toggleDrawer(false)}/>


                {/* Hero Section */}
                <HeroSection/>
                <IntroSection/>
                {/* Details Section */}
                <DetailsSection weddingData={weddingData}/>
                <ScheduleSection/>
                <InfoSection/>
                <RSVPSection/>

                {/* Footer */}
                <FooterSection/>

            </Box>
        </ThemeProvider>
    );
}

export default WeddingWebsite;