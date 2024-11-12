import React from 'react';
import { Box, Typography, Grid, Paper, Divider } from '@mui/material';
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
    // Sample data for the charts
    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Visitors',
            data: [100, 200, 150, 300, 400, 200, 300, 250, 400, 350, 300, 450],
            borderColor: '#42a5f5',
            backgroundColor: '#90caf9',
            fill: true,
        }]
    };

    const barData = {
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        datasets: [{
            label: 'Volume',
            data: [12, 19, 3, 5, 2, 3, 10],
            backgroundColor: '#66bb6a'
        }]
    };

    const doughnutData = {
        labels: ['Active', 'Inactive'],
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#42a5f5', '#eeeeee']
        }]
    };

    const pieData = {
        labels: ['North America', 'Europe', 'Asia', 'South America'],
        datasets: [{
            data: [500, 300, 200, 100],
            backgroundColor: ['#ff7043', '#4caf50', '#42a5f5', '#ffee58']
        }]
    };

    return (
        <Box sx={{ flexGrow: 1, padding: 2, bgcolor: 'background.default', color: 'text.primary' }}>
            <Typography variant="h4" sx={{ mb: 3 }}>Dashboard Overview</Typography>

            {/* Row 1 - Large Key Metric Charts */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6">New Visitors</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Line data={lineData} options={{ responsive: true, maintainAspectRatio: true }} height={200} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6">Volume</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Bar data={barData} options={{ responsive: true, maintainAspectRatio: true }} height={200} />
                    </Paper>
                </Grid>
            </Grid>

            {/* Row 2 - Small Charts with Overview */}
            <Grid container spacing={3} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="subtitle1">Customer Engagement</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: true }} height={100} />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="subtitle1">User Demographics</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: true }} height={100} />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="subtitle1">Active Users</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Line data={lineData} options={{ responsive: true, maintainAspectRatio: true }} height={100} />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="subtitle1">Sales Volume</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Bar data={barData} options={{ responsive: true, maintainAspectRatio: true }} height={100} />
                    </Paper>
                </Grid>
            </Grid>

            {/* Key Insights Section */}
            <Grid container spacing={3} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6" color="primary">10</Typography>
                        <Typography variant="body2" color="text.secondary">Total Tickets</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6" color="primary">350</Typography>
                        <Typography variant="body2" color="text.secondary">New Users</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6" color="primary">8</Typography>
                        <Typography variant="body2" color="text.secondary">Tickets Closed</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6" color="primary">5%</Typography>
                        <Typography variant="body2" color="text.secondary">Increase from last Month</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
