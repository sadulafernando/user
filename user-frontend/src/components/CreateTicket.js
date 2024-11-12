import React from 'react';
import { Modal, Box, Typography, IconButton, TextField, Button, Paper, Grid, InputAdornment, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';

const CreateTicket = ({ open, onClose }) => {
    const { enqueueSnackbar } = useSnackbar();

    const formik = useFormik({
        initialValues: {
            productName: '',
            productNumber: '',
            productDetails: '',
            notes: '',
            category: '',
            product: '',
        },
        validationSchema: Yup.object({
            productName: Yup.string().required('Product Name is required'),
            productNumber: Yup.string().required('Product Number is required'),
            product: Yup.string().required('Please select a product'),
            category: Yup.string().required('Please select a category'),
        }),
        onSubmit: (values) => {
            console.log(values);
            enqueueSnackbar('Ticket submitted successfully!', { variant: 'success' });
            onClose(); // Close dialog on successful submission
        },
    });

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="create-ticket-title" aria-describedby="create-ticket-content">
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

                <Box sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Create New Ticket
                    </Typography>

                    <form onSubmit={formik.handleSubmit}>
                        <Paper elevation={1} sx={{ padding: 3, mb: 3 }}>
                            <Typography variant="h6" gutterBottom>Details</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Select Product"
                                        variant="outlined"
                                        size="small"
                                        {...formik.getFieldProps('product')}
                                        error={formik.touched.product && Boolean(formik.errors.product)}
                                        helperText={formik.touched.product && formik.errors.product}
                                    >
                                        <MenuItem value="Product1">Product 1</MenuItem>
                                        <MenuItem value="Product2">Product 2</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Category"
                                        variant="outlined"
                                        size="small"
                                        {...formik.getFieldProps('category')}
                                        error={formik.touched.category && Boolean(formik.errors.category)}
                                        helperText={formik.touched.category && formik.errors.category}
                                    >
                                        <MenuItem value="Category1">Category 1</MenuItem>
                                        <MenuItem value="Category2">Category 2</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Product Name"
                                        fullWidth
                                        variant="outlined"
                                        size="small"
                                        {...formik.getFieldProps('productName')}
                                        error={formik.touched.productName && Boolean(formik.errors.productName)}
                                        helperText={formik.touched.productName && formik.errors.productName}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Product Number"
                                        fullWidth
                                        variant="outlined"
                                        size="small"
                                        {...formik.getFieldProps('productNumber')}
                                        error={formik.touched.productNumber && Boolean(formik.errors.productNumber)}
                                        helperText={formik.touched.productNumber && formik.errors.productNumber}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton edge="end" size="small">
                                                        <InfoOutlinedIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Product Details"
                                        fullWidth
                                        multiline
                                        rows={2}
                                        placeholder="Summary (e.g. description, invoice number)"
                                        variant="outlined"
                                        {...formik.getFieldProps('productDetails')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Notes / Terms"
                                        fullWidth
                                        multiline
                                        rows={3}
                                        placeholder="Enter note or terms of the service"
                                        variant="outlined"
                                        {...formik.getFieldProps('notes')}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </form>

                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Button variant="outlined" onClick={formik.handleReset} sx={{ mr: 2 }}>
                            Save as Draft
                        </Button>
                        <Button variant="contained" color="primary" onClick={formik.handleSubmit}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Modal>
    );
};

export default CreateTicket;

