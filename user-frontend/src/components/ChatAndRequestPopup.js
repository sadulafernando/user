import React, { useState } from 'react';
import {
    Box,
    Typography,
    Chip,
    Divider,
    TextField,
    List,
    ListItem,
    Avatar,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AttachmentIcon from '@mui/icons-material/AttachFile';
import WorkTrack from './WorkTrack';

const ChatAndRequestPopup = ({ darkMode }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [showChatBox, setShowChatBox] = useState(false);
    const [showWorkTrack, setShowWorkTrack] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, sender: 'Mahinda', text: "I've finished with the requirement doc! You can look over." },
        { id: 2, sender: 'You', text: "I'll look at this today." }
    ]);
    const [file, setFile] = useState(null); // Track the selected file

    const handleSendMessage = () => {
        if (message.trim() || file) {
            const newMessage = {
                id: messages.length + 1,
                sender: 'You',
                text: message,
                file: file ? file.name : null // Add file name if file is attached
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setMessage('');
            setFile(null); // Clear the file after sending
        }
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Set the selected file
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                height: '100vh',
                padding: isSmallScreen ? 1 : 2,
                overflow: 'hidden',
                backgroundColor: darkMode ? theme.palette.background.default : 'transparent',
            }}
        >
            {/* Ticket Information Box */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1100px',
                    borderRadius: 2,
                    boxShadow: 1,
                    padding: isSmallScreen ? 2 : 3,
                    overflowY: 'auto',
                }}
            >
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} gutterBottom>
                    Ticket No With Subject
                </Typography>

                <Box mt={2}>
                    <Typography variant="subtitle2">Request ID: 123456</Typography>
                    <Typography variant="subtitle2">Request Status: OPENED</Typography>
                    <Typography variant="subtitle2">Support Agent: Mahinda Ataya</Typography>
                </Box>

                <Divider sx={{ my: 1 }} />

                <Typography variant={isSmallScreen ? 'body1' : 'h6'} gutterBottom>
                    Request Details
                </Typography>
                <Typography variant="body2">
                    A production error is when a product is manufactured differently than its intended design
                    A production error is when a product is manufactured differently than its intended design
                    A production error is when a product is manufactured differently than its intended design
                </Typography>

                {/* Status and Chips */}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                    <Chip label="Status-OPENED" sx={{ backgroundColor: '#4CAF50', color: '#fff' }} />
                    <Chip label="Priority-Critical" sx={{ backgroundColor: '#F44336', color: '#fff' }} />
                    <Chip label="Impact-Health" sx={{ backgroundColor: '#FF9800', color: '#fff' }} />
                    <Chip label="Technical Group-Working" sx={{ backgroundColor: '#2196F3', color: '#fff' }} />
                    <Chip label="Assignee-Mahinda" sx={{ backgroundColor: '#9C27B0', color: '#fff' }} />
                </Box>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <Button
                    variant="contained"
                    onClick={() => setShowChatBox(true)}
                    sx={{
                        borderRadius: 2,
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <ChatBubbleOutlineIcon /> Chat
                </Button>
                <Button
                    variant="contained"
                    onClick={() => setShowWorkTrack(true)}
                    sx={{
                        borderRadius: 2,
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <WorkOutlineIcon /> Work Track
                </Button>
            </Box>

            {/* Chat Modal */}
            <Dialog
                open={showChatBox}
                onClose={() => setShowChatBox(false)}
                fullWidth
                maxWidth="md"
                PaperProps={{
                    sx: {
                        margin: isSmallScreen ? 1 : 2,
                        padding: 2,
                        borderRadius: 2,
                        boxShadow: 3,
                    },
                }}
            >
                <DialogTitle>Chat</DialogTitle>
                <DialogContent dividers>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ flex: 1, overflowY: 'auto', paddingX: 1, maxHeight: '300px' }}>
                            <List sx={{ padding: 0 }}>
                                {messages.map((msg) => (
                                    <ListItem
                                        key={msg.id}
                                        disableGutters
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 1,
                                            paddingBottom: 0,
                                            flexDirection: msg.sender === 'You' ? 'row-reverse' : 'row',
                                        }}
                                    >
                                        <Avatar sx={{ width: 40, height: 40 }}>{msg.sender.charAt(0)}</Avatar>
                                        <Box
                                            sx={{
                                                padding: 1.5,
                                                borderRadius: 2,
                                                maxWidth: isSmallScreen ? '100%' : '70%',
                                                boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
                                                border: '1px solid #e0e0e0',
                                                backgroundColor: darkMode ? '#333' : 'transparent',
                                            }}
                                        >
                                            <Typography variant="body2" fontWeight="bold">
                                                {msg.sender}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                                {msg.text}
                                            </Typography>
                                            {msg.file && (
                                                <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                                                    📎 {msg.file}
                                                </Typography>
                                            )}
                                        </Box>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        {/* Message Input and File Attachment */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <TextField
                                variant="outlined"
                                placeholder="Type your message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                fullWidth
                                multiline
                                rows={1}
                                sx={{ mt: 1, borderRadius: 2 }}
                            />
                            <IconButton component="label">
                                <AttachmentIcon />
                                <input type="file" hidden onChange={handleFileChange} />
                            </IconButton>
                            <IconButton
                                onClick={handleSendMessage}
                                disabled={!message.trim() && !file}
                            >
                                <SendIcon />
                            </IconButton>
                        </Box>
                        {file && (
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                Attached: {file.name}
                            </Typography>
                        )}
                    </Box>
                </DialogContent>
            </Dialog>

            {/* Work Track Modal */}
            <Dialog
                open={showWorkTrack}
                onClose={() => setShowWorkTrack(false)}
                fullWidth
                maxWidth="sm"
                PaperProps={{
                    sx: {
                        margin: isSmallScreen ? 1 : 2,
                        padding: 2,
                        borderRadius: 2,
                        boxShadow: 3,
                    },
                }}
            >
                <DialogTitle>Work Track</DialogTitle>
                <DialogContent dividers>
                    <WorkTrack />
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default ChatAndRequestPopup;
