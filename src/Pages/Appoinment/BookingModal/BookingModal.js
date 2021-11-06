import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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

const BookingModal = ({ modalOpen, handleBookingClose, booking, date }) => {
    const { name, time } = booking;

    const appoinmentFormHangler = e => {
        alert("Booked!! Successfully");
        e.preventDefault();
        handleBookingClose();

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
                                size="small"
                            />
                            <TextField
                                disabled
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField

                                id="outlined-size-small"
                                defaultValue="Your Name"
                                size="small"
                            />
                            <TextField

                                id="outlined-size-small"
                                defaultValue="Your Email"
                                size="small"
                            />
                            <TextField

                                id="outlined-size-small"
                                defaultValue="Your Phone Number"
                                size="small"
                            />
                            <TextField
                                disabled
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