import React from 'react';
import { Modal, Box, Typography, IconButton, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ArticlePopup = ({ open, onClose, article }) => {
    if (!article) return null;

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="article-title" aria-describedby="article-content">
            <Paper
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: 1000,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ p: 4, mt: 2, minHeight: '400px' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {article.subject}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        <strong>By Connex Group</strong> - Last Updated: {article.lastUpdated}
                    </Typography>

                    <Typography variant="body1">
                        {article.content}
                    </Typography>
                </Box>

                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Did you find this article helpful?</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <IconButton color="success" size="large">
                            <ThumbUpIcon fontSize="large" />
                        </IconButton>
                        <IconButton color="error" size="large">
                            <ThumbDownIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </Box>
            </Paper>
        </Modal>
    );
};

export default ArticlePopup;
