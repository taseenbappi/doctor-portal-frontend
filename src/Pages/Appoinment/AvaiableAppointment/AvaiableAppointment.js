import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvaiableAppointment = ({ date }) => {
    const [successbooking, setSuccessBooking] = useState(false);
    const bookings = [
        {
            id: 1,
            name: "Teeth Cleaning",
            time: "8:00am - 10:00pm",
            space: 8
        },
        {
            id: 2,
            name: "Cavity Treatment",
            time: "8:00am - 10:00pm",
            space: 8
        },
        {
            id: 3,
            name: "Teeth Whiting",
            time: "8:00am - 10:00pm",
            space: 8
        },
        {
            id: 4,
            name: "Teeth Whiting",
            time: "8:00am - 10:00pm",
            space: 8
        },
        {
            id: 5,
            name: "Teeth Whiting",
            time: "8:00am - 10:00pm",
            space: 8
        },
        {
            id: 6,
            name: "Teeth Whiting",
            time: "8:00am - 10:00pm",
            space: 8
        }
    ];
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main' }}>
                Appoinment Avaiable On
            </Typography>
            <Typography variant="h6">
                Date: {date.toDateString()}
            </Typography>
            {successbooking && <Alert severity="success" sx={{ width: 300 }}>Appointments Booked Successfully</Alert>}

            <Grid container spacing={2} sx={{ p: 5 }}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setSuccessBooking={setSuccessBooking}
                    ></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvaiableAppointment;