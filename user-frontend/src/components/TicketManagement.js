import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, Divider, useTheme, Grid } from '@mui/material';
import CreateTicket from './CreateTicket'; // Import CreateTicket modal
import ChatAndRequestPopup from './ChatAndRequestPopup'; // Import ChatAndRequestPopup component

const TicketManagement = () => {
    const theme = useTheme();
    const historyItems = Array(5).fill({ title: 'Tripping Circuit Breaker (CLOSED)', date: '01/10/2024' }).slice(0, 3);

    const [openTicketModal, setOpenTicketModal] = useState(false); // State to manage modal visibility
    const [showChatPopup, setShowChatPopup] = useState(false); // State to show ChatAndRequestPopup
    const [openRequest] = useState({ title: 'Server Connectivity Issue (OPEN)', date: '02/10/2024' }); // Example open request

    const handleRaiseTicket = () => {
        setOpenTicketModal(true); // Open the modal when the button is clicked
    };

    const handleCloseTicketModal = () => {
        setOpenTicketModal(false); // Close the modal
    };

    const handleViewOpenRequest = () => {
        setShowChatPopup(true); // Show ChatAndRequestPopup when Action button is clicked
    };

    const handleCloseChatPopup = () => {
        setShowChatPopup(false); // Function to close ChatAndRequestPopup
    };

    return (
        <Box sx={{ flexGrow: 1, padding: 3, bgcolor: theme.palette.background.default }}>
            {showChatPopup ? (
                // Render ChatAndRequestPopup if showChatPopup is true
                <ChatAndRequestPopup onClose={handleCloseChatPopup} />
            ) : (
                // Render TicketManagement main content
                <>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Typography variant="h4" color="text.primary">Ticket Management</Typography>
                        <TextField
                            placeholder="Search here..."
                            variant="outlined"
                            size="small"
                            sx={{ width: 200 }}
                        />
                    </Box>

                    <Typography variant="h6" color="text.primary">Your Open Request</Typography>
                    <List sx={{ mb: 3 }}>
                        <ListItem sx={{ bgcolor: theme.palette.action.hover, borderRadius: '10px', mb: 1 }}>
                            <Grid container spacing={2} sx={{ width: '100%' }}>
                                <Grid item xs={4}>
                                    <ListItemText
                                        primary={openRequest.title}
                                        primaryTypographyProps={{ color: 'text.primary' }}
                                    />
                                </Grid>
                                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Created: {openRequest.date}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} sx={{ textAlign: 'right' }}>
                                    <Button variant="text" onClick={handleViewOpenRequest}>
                                        Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>

                    <Typography variant="h6" color="text.primary">Your Request History</Typography>
                    <List>
                        {historyItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <ListItem sx={{ bgcolor: theme.palette.action.hover, borderRadius: '10px', mb: 1 }}>
                                    <Grid container spacing={2} sx={{ width: '100%' }}>
                                        <Grid item xs={4}>
                                            <ListItemText
                                                primary={item.title}
                                                primaryTypographyProps={{ color: 'text.primary' }}
                                            />
                                        </Grid>
                                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant="body2" color="text.secondary">
                                                Created: {item.date}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} sx={{ textAlign: 'right' }}>
                                            <Button variant="text">Action</Button>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                {index < historyItems.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </List>

                    <Box sx={{ mt: 5, textAlign: 'center', bgcolor: theme.palette.background.default, padding: 3, borderRadius: '10px' }}>
                        <Typography variant="h6" color="text.primary">Still Need Help?</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Raise a ticket request with one of our team.
                        </Typography>
                        <Button variant="contained" color="error" onClick={handleRaiseTicket}>RAISE A TICKET</Button>
                    </Box>

                    {/* CreateTicket modal */}
                    <CreateTicket open={openTicketModal} onClose={handleCloseTicketModal} />
                </>
            )}
        </Box>
    );
};

export default TicketManagement;