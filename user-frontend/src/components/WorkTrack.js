// WorkTrack.js
import React from 'react';
import { Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ErrorIcon from '@mui/icons-material/Error';

const WorkTrack = () => {
    const updates = [
        { text: 'OPENED the ticket request', type: 'opened' },
        { text: 'Assigned the team member to investigate the problem', type: 'assigned' },
        { text: 'In progress - Reviewing details', type: 'in_progress' },
        { text: 'Completed - Resolved the issue', type: 'completed' },
        { text: 'Additional step placeholder', type: 'placeholder' },
    ];

    const getIconAndColor = (type) => {
        switch (type) {
            case 'opened':
                return { icon: <ErrorIcon />, color: '#FF7043' }; // Orange color for "opened"
            case 'assigned':
                return { icon: <AssignmentTurnedInIcon />, color: '#42A5F5' }; // Blue color for "assigned"
            case 'in_progress':
                return { icon: <HourglassEmptyIcon />, color: '#FFCA28' }; // Yellow for "in progress"
            case 'completed':
                return { icon: <CheckCircleIcon />, color: '#66BB6A' }; // Green for "completed"
            default:
                return { icon: <ArrowForwardIosIcon />, color: '#BDBDBD' }; // Grey for placeholders or unknown types
        }
    };

    return (
        <Box sx={{ width: '100%', padding: 2 }}>
            <List>
                {updates.map((update, index) => {
                    const { icon, color } = getIconAndColor(update.type);
                    return (
                        <ListItem
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: color + '20', // Lighten background color
                                borderRadius: 2,
                                padding: 1.5,
                                marginBottom: 1,
                            }}
                        >
                            <IconButton sx={{ color }}>
                                {icon}
                            </IconButton>
                            <ListItemText
                                primary={update.text}
                                primaryTypographyProps={{
                                    fontWeight: 'medium',
                                    color: color,
                                }}
                            />
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default WorkTrack;
