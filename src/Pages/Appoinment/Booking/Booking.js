import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;
    console.log(date);
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleBookingOpen = () => setModalOpen(true);
    const handleBookingClose = () => setModalOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}  >
                <Paper elevation={4} sx={{ p: 5 }}>
                    <Typography variant="h4" sx={{ color: 'info.main', fontWeight: "600" }}>
                        {name}
                    </Typography>
                    <Typography variant="h5">
                        {time}
                    </Typography>
                    <Typography variant="h6">
                        {space} Avaible now
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINMENT</Button>


                </Paper>
            </Grid>
            <BookingModal
                modalOpen={modalOpen}
                handleBookingClose={handleBookingClose}
                booking={booking}
                date={date}

            ></BookingModal>
        </>
    );
};

export default Booking;