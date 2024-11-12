import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, Switch } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import connexLogo from '../assets/connex-logo.png';
import companyLogo from '../assets/company-logo.png';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ onToggleTheme, darkMode }) => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Box sx={{ width: 240, bgcolor: darkMode ? '#333' : '#e0e0e0', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 2 }}>
            <Box>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <img src={connexLogo} alt="Connex Logo" style={{ width: '100px', height: 'auto' }} />
                </Box>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleNavigation('/dashboard')}>
                            <ListItemIcon><DashboardIcon /></ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleNavigation('/profile')}>
                            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleNavigation('/ticketRequest')}>
                            <ListItemIcon><ReceiptIcon /></ListItemIcon>
                            <ListItemText primary="Ticket Request" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleNavigation('/knowledgeHub')}>
                            <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                            <ListItemText primary="Knowledge Hub" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleNavigation('/settings')}>
                            <ListItemIcon><SettingsIcon /></ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Divider sx={{ my: 2 }} />
                <ListItem disablePadding>
                    <ListItemIcon>
                        {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
                    </ListItemIcon>
                    <ListItemText primary="Dark Mode" />
                    <Switch checked={darkMode} onChange={onToggleTheme} />
                </ListItem>
            </Box>

            <Box>
                <ListItem disablePadding sx={{ mt: 4 }}>
                    <ListItemButton>
                        <ListItemIcon><LogoutIcon /></ListItemIcon>
                        <ListItemText primary="Signout" />
                    </ListItemButton>
                </ListItem>

                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <img src={companyLogo} alt="Company Logo" style={{ width: '80px', height: 'auto' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
