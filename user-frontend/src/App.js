import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TicketManagement from './components/TicketManagement';
import CreateTicket from './components/CreateTicket';
import KnowledgeHub from './components/KnowledgeHub';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [isTicketPopupOpen, setTicketPopupOpen] = useState(false);

    // Toggles dark mode theme
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Opens and closes ticket creation popup
    const handleOpenTicketPopup = () => {
        setTicketPopupOpen(true);
    };
    const handleCloseTicketPopup = () => {
        setTicketPopupOpen(false);
    };

    // Custom theme based on darkMode state
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#90caf9' : '#1976d2',
            },
            background: {
                default: darkMode ? '#121212' : '#f5f5f5',
                paper: darkMode ? '#1e1e1e' : '#ffffff',
            },
            text: {
                primary: darkMode ? '#ffffff' : '#000000',
                secondary: darkMode ? '#b0bec5' : '#000000',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Box sx={{ display: 'flex' }}>
                    {/* Sidebar with dark mode toggle */}
                    <Sidebar onToggleTheme={toggleDarkMode} darkMode={darkMode} />

                    {/* Main Content Area */}
                    <Box sx={{ flexGrow: 1, padding: 3 }}>
                        <Routes>
                            <Route path="/" element={<Dashboard />} /> {/* Main dashboard route */}
                            <Route path="/ticketRequest" element={<TicketManagement onRaiseTicket={handleOpenTicketPopup} />} />
                            <Route path="/createTicket" element={<CreateTicket open={isTicketPopupOpen} onClose={handleCloseTicketPopup} />} />
                            <Route path="/knowledgeHub" element={<KnowledgeHub />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                        </Routes>
                    </Box>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
