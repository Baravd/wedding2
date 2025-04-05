import React from 'react';
import {Box, Drawer, List, ListItem, ListItemText,} from '@mui/material';

const WeddingDrawer = ({open, onClose}) => {
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    bgcolor: '#6b7054', // green background
                    color: 'white',      // white text
                },
            }}
        >
            <Box
                sx={{width: 250}}
                role="presentation"
                onClick={onClose}
            >
                <List>
                    {[
                        {label: 'Home', href: '#home'},
                        {label: 'Intro', href: '#intro'},
                        {label: 'Locații', href: '#details'},
                        {label: 'Program', href: '#schedule'},
                        {label: 'Informații', href: '#info'},
                        {label: 'Confirmări', href: '#rsvp'},
                    ].map(({label, href}) => (
                        <ListItem
                            key={href}
                            button
                            component="a"
                            href={href}
                            sx={{
                                color: 'white',
                                '&:hover': {backgroundColor: 'rgba(255,255,255,0.1)'},
                                '&.Mui-selected': {backgroundColor: 'transparent', color: 'white'},
                                '&.Mui-focusVisible': {backgroundColor: 'transparent'},
                            }}
                        >
                            <ListItemText
                                primary={label}
                                primaryTypographyProps={{fontWeight: 600, textTransform: 'uppercase'}}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default WeddingDrawer;
