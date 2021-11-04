import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png';
import doctorbg from '../../../images/appointment-bg.png';
const appoinmentbg = {
    background: `url(${doctorbg})`,
    marginTop: 200,
    backgroundColor: "rgba(134, 72, 121 , 0.5)",
    backgroundBlendMode: "darken"

}

const AppoinmentBanner = () => {

    return (
        <Box style={appoinmentbg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{
                            height: "400px",
                            marginTop: "-120px"
                        }}
                        src={doctor} alt="" />
                </Grid>
                <Grid sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: "left"
                }} item xs={12} md={6} >
                    <Box>
                        <Typography variant="h5">
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: "white" }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, enim.
                        </Typography>
                        <Button variant="contained">Appoinment</Button>
                    </Box>


                </Grid>

            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;