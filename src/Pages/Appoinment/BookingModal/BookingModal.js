import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ modalOpen, handleBookingClose, booking, date, setSuccessBooking }) => {
    const { name, time } = booking;
    const { user } = useAuth();
    const initialInfo = {
        patientName: user.displayName,
        email: user.email,
        phone: ""
    }
    const [appointments, setAppointments] = useState(initialInfo);

    const onBlurHandler = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newAppoinments = { ...appointments };
        newAppoinments[field] = value;
        setAppointments(newAppoinments);
        console.log(appointments);
    }

    const appoinmentFormHangler = e => {
        // collect data client
        const appointmentsData = {
            ...appointments,
            title: name,
            time,
            date: date.toLocaleDateString()
        }
        // send data to server
        fetch("https://infinite-shore-61650.herokuapp.com/appointments", {
            method: "POST",
            headers: { "content-type": "application/json", },
            body: JSON.stringify(appointmentsData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccessBooking(true)
                    alert("Booked!! Successfully");
                    handleBookingClose();
                }
            })

        e.preventDefault();

    }
    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modalOpen}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modalOpen}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Book Your Day
                        </Typography>
                        <form onSubmit={appoinmentFormHangler}>
                            <TextField
                                disabled
                                id="outlined-size-small"
                                defaultValue={name}
                                name="title"
                                size="small"
                            />
                            <TextField
                                disabled
                                id="outlined-size-small"
                                name="time"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField
                                name="patientName"
                                id="outlined-size-small"
                                onBlur={onBlurHandler}
                                defaultValue={user.displayName}
                                size="small"
                            />
                            <TextField
                                name="email"
                                id="outlined-size-small"
                                onBlur={onBlurHandler}
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                name="phone"
                                id="outlined-size-small"
                                onBlur={onBlurHandler}
                                defaultValue="Your Phone Number"
                                size="small"
                            />
                            <TextField
                                disabled
                                name="date"
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <br />
                            <Button
                                type="submit"
                                variant="contained">Submit</Button>


                        </form>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;