import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArticlePopup from './ArticlePopup';

const KnowledgeHub = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const articles = [
        {
            subject: "What is CONNEX360",
            category: "FAQ",
            update: "06/10/2024",
            content: "We deliver cutting-edge technology backed by highly motivated, skilled, and certified team of professionals\n" +
                "Since our inception, our core objective is to revolution how businesses manage their IT from a manual approach to an autonomous service delivery and to develop channel marketing to deliver innovation, service and cost efficiency.\n" +
                "\n" +
                "We offer business solutions that comprise IT support and Transformation, Network Connectivity, Technical Support and IT Consultancy Services. We handle everything for you, assisting you in keeping your business running smoothly with updated technology.",
            lastUpdated: "August 12th, 2024",
        },
        {
            subject: "Product Installation Error",
            category: "FAQ",
            update: "06/10/2024",
            content: "We deliver cutting-edge technology backed by highly motivated, skilled, and certified team of professionals\n" +
                "Since our inception, our core objective is to revolution how businesses manage their IT from a manual approach to an autonomous service delivery and to develop channel marketing to deliver innovation, service and cost efficiency.\n" +
                "\n" +
                "We offer business solutions that comprise IT support and Transformation, Network Connectivity, Technical Support and IT Consultancy Services. We handle everything for you, assisting you in keeping your business running smoothly with updated technology.",
            lastUpdated: "August 5th, 2024",
        },
        {
            subject: "(UPDATED) Product Information",
            category: "General",
            update: "06/10/2024",
            content: "We deliver cutting-edge technology backed by highly motivated, skilled, and certified team of professionals\n" +
                "Since our inception, our core objective is to revolution how businesses manage their IT from a manual approach to an autonomous service delivery and to develop channel marketing to deliver innovation, service and cost efficiency.\n" +
                "\n" +
                "We offer business solutions that comprise IT support and Transformation, Network Connectivity, Technical Support and IT Consultancy Services. We handle everything for you, assisting you in keeping your business running smoothly with updated technology.",
            lastUpdated: "August 10th, 2024",
        },
    ];

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedArticle(null);
    };

    return (
        <Box sx={{ flexGrow: 1, padding: 3, bgcolor: 'background.default', color: 'text.primary' }}>
            <Typography variant="h4" sx={{ mb: 3 }}>Knowledge Hub</Typography>

            <Typography variant="h6" sx={{ mb: 2 }}>Support Articles</Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                {[
                    { icon: <AccessibilityNewIcon fontSize="large" sx={{ color: '#3f51b5' }} />, title: 'Accessibility' },
                    { icon: <HelpOutlineIcon fontSize="large" sx={{ color: '#f44336' }} />, title: 'Known Issues' },
                    { icon: <MenuBookIcon fontSize="large" sx={{ color: '#4caf50' }} />, title: 'Install Guide' },
                    { icon: <ErrorOutlineIcon fontSize="large" sx={{ color: '#ff9800' }} />, title: 'Help' }
                ].map((article, index) => (
                    <Grid item xs={3} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 2,
                                textAlign: 'center',
                                bgcolor: 'background.paper',
                                transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 6,
                                    bgcolor: 'action.hover',
                                },
                            }}
                        >
                            {article.icon}
                            <Typography variant="body1" sx={{ mt: 1 }}>{article.title}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6">Featured Articles</Typography>
            <Paper elevation={1} sx={{ padding: 2, bgcolor: 'background.paper', mt: 1 }}>
                <List>
                    <ListItem>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item xs={5}>
                                <Typography variant="subtitle2">Subject</Typography>
                            </Grid>
                            <Grid item xs={3} sx={{ textAlign: 'center' }}>
                                <Typography variant="subtitle2">Category</Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ textAlign: 'right', ml: 'auto' }}>
                                <Typography variant="subtitle2">Update</Typography>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Divider />

                    {articles.map((article, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                    boxShadow: 3,
                                    bgcolor: 'action.hover',
                                },
                            }}
                            onClick={() => handleArticleClick(article)}
                        >
                            <Grid container justifyContent="space-between" alignItems="center">
                                <Grid item xs={5}>
                                    <ListItemText primary={article.subject} sx={{ color: 'text.primary' }} />
                                </Grid>
                                <Grid item xs={3} sx={{ textAlign: 'center' }}>
                                    <ListItemText primary={article.category} sx={{ color: 'text.secondary' }} />
                                </Grid>
                                <Grid item xs={2} sx={{ textAlign: 'right', ml: 'auto' }}>
                                    <ListItemText primary={article.update} sx={{ color: 'text.secondary' }} />
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))}
                </List>
            </Paper>

            <ArticlePopup open={isPopupOpen} onClose={handleClosePopup} article={selectedArticle} />
        </Box>
    );
};

export default KnowledgeHub;
